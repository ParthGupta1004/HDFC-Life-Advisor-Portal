import { NextResponse } from "next/server";

export function middleware(req) {
  const sessionToken =
    req.cookies.get("next-auth.session-token") ||
    req.cookies.get("__Secure-next-auth.session-token");

  if (!sessionToken) {
    return NextResponse.redirect(
      new URL("/auth/signin", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/desk/:path*",
};