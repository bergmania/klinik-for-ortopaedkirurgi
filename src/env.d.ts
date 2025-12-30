interface Env {
  CONTACT_EMAIL: string;
  SENDING_EMAIL: string;
  RESEND_API_KEY: string;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
