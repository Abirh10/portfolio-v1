import { NextResponse } from "next/server";

// The home page is statically prerendered at build time, so a per-request
// nonce CSP can't work: the baked HTML's inline bootstrap scripts would
// never carry the request's nonce and the browser would block all JS
// (which is exactly what happened on the first production deploy).
// 'unsafe-inline' for scripts is the workable policy for a static site;
// everything else stays locked to same-origin.
export function proxy() {
  // React's dev-mode debugging (stack trace reconstruction) needs eval();
  // it never runs in production, so this only loosens the dev server.
  const scriptSrc =
    process.env.NODE_ENV === "development"
      ? `'self' 'unsafe-inline' 'unsafe-eval'`
      : `'self' 'unsafe-inline'`;

  const csp = `
    default-src 'self';
    script-src ${scriptSrc};
    style-src 'self' 'unsafe-inline';
    img-src 'self' data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    // Skip static assets — no need to run CSP logic for them.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf)$).*)",
  ],
};
