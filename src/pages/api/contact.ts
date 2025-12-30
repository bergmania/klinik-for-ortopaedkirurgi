import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { i18n } from '../../i18n';

// This endpoint must be server-rendered to handle POST requests
export const prerender = false;

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
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(RATE_LIMIT_WINDOW / 1000)
          }
        }
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
    const runtime = locals.runtime as { env: Env };
    const contactEmail = runtime?.env?.CONTACT_EMAIL;
    const resendApiKey = runtime?.env?.RESEND_API_KEY;
    const sendingEmail = runtime?.env?.SENDING_EMAIL;

    if (!contactEmail || !resendApiKey) {
      console.error('Missing environment variables:', {
        CONTACT_EMAIL: contactEmail ? 'set' : 'missing',
        RESEND_API_KEY: resendApiKey ? 'set' : 'missing'
      });
      return new Response(
        JSON.stringify({ success: false, message: messages.emailNotConfigured }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Resend client
    const resend = new Resend(resendApiKey);

    // Send email using Resend SDK
    const { error } = await resend.emails.send({
      from: `${i18n.site.title} <${sendingEmail}>`,
      to: [contactEmail],
      replyTo: data.email,
      subject: `${i18n.email.newInquiryFrom} ${data.name}`,
      html: generateEmailHtml(data),
      text: generateEmailText(data),
    });

    if (error) {
      console.error('Resend error:', error);
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

// Generate styled HTML email
function generateEmailHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a5f7a 0%, #0d3d4d 100%); padding: 30px 40px; border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                ${i18n.site.title}
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">
                ${i18n.email.newInquiryTitle}
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px;">

              <!-- Contact Info Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafb; border-radius: 8px; border-left: 4px solid #1a5f7a; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-bottom: 12px;">
                          <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #1a5f7a; font-weight: 600; margin-bottom: 4px;">${i18n.contactForm.name}</span>
                          <span style="display: block; font-size: 16px; color: #2c3e50; font-weight: 500;">${escapeHtml(data.name)}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 12px;">
                          <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #1a5f7a; font-weight: 600; margin-bottom: 4px;">${i18n.contactForm.email}</span>
                          <a href="mailto:${escapeHtml(data.email)}" style="display: block; font-size: 16px; color: #1a5f7a; text-decoration: none;">${escapeHtml(data.email)}</a>
                        </td>
                      </tr>
                      ${data.phone ? `
                      <tr>
                        <td>
                          <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #1a5f7a; font-weight: 600; margin-bottom: 4px;">${i18n.contactForm.phone}</span>
                          <a href="tel:${escapeHtml(data.phone.replace(/\s/g, ''))}" style="display: block; font-size: 16px; color: #1a5f7a; text-decoration: none;">${escapeHtml(data.phone)}</a>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-bottom: 24px;">
                <h2 style="margin: 0 0 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #1a5f7a; font-weight: 600;">${i18n.contactForm.message}</h2>
                <div style="background-color: #ffffff; border: 1px solid #e8eef1; border-radius: 8px; padding: 20px;">
                  <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #2c3e50; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
                </div>
              </div>

              <!-- Reply Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(data.email)}" style="display: inline-block; background-color: #1a5f7a; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; padding: 14px 28px; border-radius: 8px;">
                      Svar på henvendelse
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #2c3e50; padding: 24px 40px; border-radius: 0 0 12px 12px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 8px; font-size: 13px; color: rgba(255,255,255,0.7);">
                      ${i18n.email.sentFrom}
                    </p>
                    <p style="margin: 0; font-size: 12px; color: rgba(255,255,255,0.5);">
                      ${i18n.contact.address.street}, ${i18n.contact.address.city} · ${i18n.contact.phone}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// Generate plain text email
function generateEmailText(data: ContactFormData): string {
  return `
${i18n.email.newInquiryTitle}
${'='.repeat(40)}

${i18n.contactForm.name}: ${data.name}
${i18n.contactForm.email}: ${data.email}
${data.phone ? `${i18n.contactForm.phone}: ${data.phone}` : ''}

${i18n.contactForm.message}:
${'-'.repeat(20)}
${data.message}

${'='.repeat(40)}
${i18n.email.sentFrom}
${i18n.contact.address.street}, ${i18n.contact.address.city}
${i18n.contact.phone}
  `.trim();
}
