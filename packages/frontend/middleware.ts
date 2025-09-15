import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    process.env.NODE_ENV === "production" &&
    request.headers.get("x-forwarded-proto") !== "https" &&
    !request.headers.get("host")?.includes("localhost")
  ) {
    return NextResponse.redirect(
      `https://${request.headers.get("host")}${request.nextUrl.pathname}`,
      301,
    );
  }

  const pathname = request.nextUrl.pathname;

  // Because we need runtime env vars, we need to avoid generating any pages at
  // buildtime. This (or any) top-level dyanmic segment ensures we opt all
  // routes out of Next's buildtime generation.
  return NextResponse.rewrite(new URL(`/dynamic${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
