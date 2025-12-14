import type { APIRoute } from 'astro';
import { i18n } from '../../i18n';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string; // Honeypot field
}

// i18n messages for API responses
const messages = i18n.contactForm.api;

// Rate limiting - in-memory store (resets on worker restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('CF-Connecting-IP') ||
               request.headers.get('X-Forwarded-For')?.split(',')[0] ||
               'unknown';

    // Check rate limit
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ success: false, message: messages.rateLimited }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data: ContactFormData = await request.json();

    // Honeypot check - if filled, silently accept but don't send email
    if (data.website && data.website.trim() !== '') {
      return new Response(
        JSON.stringify({ success: true, message: messages.messageSent }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate required fields
    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      return new Response(
        JSON.stringify({ success: false, message: messages.missingFields }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ success: false, message: messages.invalidEmail }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get environment variables from Cloudflare runtime
    const runtime = locals.runtime as { env: { CONTACT_EMAIL?: string; RESEND_API_KEY?: string } };
    const contactEmail = runtime?.env?.CONTACT_EMAIL || 'mail@bergmania.dk';
    const resendApiKey = runtime?.env?.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, message: messages.emailNotConfigured }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send email via Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${i18n.site.title} <noreply@klinikforortopaedkirurgi.dk>`,
        to: [contactEmail],
        reply_to: data.email,
        subject: `${i18n.email.newInquiryFrom} ${data.name}`,
        html: `
          <h2>${i18n.email.newInquiryTitle}</h2>
          <p><strong>${i18n.contactForm.name}:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>${i18n.contactForm.email}:</strong> ${escapeHtml(data.email)}</p>
          ${data.phone ? `<p><strong>${i18n.contactForm.phone}:</strong> ${escapeHtml(data.phone)}</p>` : ''}
          <hr>
          <p><strong>${i18n.contactForm.message}:</strong></p>
          <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            ${i18n.email.sentFrom}
          </p>
        `,
        text: `
${i18n.email.newInquiryTitle}

${i18n.contactForm.name}: ${data.name}
${i18n.contactForm.email}: ${data.email}
${data.phone ? `${i18n.contactForm.phone}: ${data.phone}` : ''}

${i18n.contactForm.message}:
${data.message}

---
${i18n.email.sentFrom}
        `.trim(),
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error('Resend API error:', errorData);
      return new Response(
        JSON.stringify({ success: false, message: messages.emailFailed }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: messages.messageSent }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ success: false, message: messages.genericError }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// Escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
