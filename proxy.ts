import { NextRequest, NextResponse } from "next/server";

// Content-Security-Policy needs a fresh nonce per request (for Next's own
// inline hydration/RSC scripts), so it's set here rather than in next.config.ts.
// style-src allows 'unsafe-inline' because Framer Motion drives animations
// via inline style attributes — there is no practical way around that with
// this library, and CSS-only injection is a much smaller blast radius than
// script injection (which stays locked down to same-origin + nonce).
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  // React's dev-mode debugging (stack trace reconstruction) needs eval();
  // it never runs in production, so this only loosens the dev server.
  const scriptSrc = process.env.NODE_ENV === "development"
    ? `'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`
    : `'self' 'nonce-${nonce}' 'strict-dynamic'`;

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

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    // Skip static assets — no need to run CSP nonce logic for them.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf)$).*)",
  ],
};
