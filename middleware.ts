import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // Redirect users based on role
    if (pathname.startsWith("/dashboard")) {
      if (token?.role === "USER") {
        return NextResponse.redirect(new URL("/user-dashboard", req.url));
      }
    }

    if (pathname.startsWith("/user-dashboard")) {
      if (token?.role === "ADMIN" || token?.role === "MODERATOR") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    }

    // Original admin/moderator check
    if (
      pathname.startsWith("/dashboard") &&
      !["ADMIN", "MODERATOR"].includes(token?.role)
    ) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/user-dashboard/:path*"],
};