import { NextRequest, NextResponse } from "next/server";

type MiddlewareFunction = (req: NextRequest) => NextResponse | undefined;

// Force-redirect every HTTP request to HTTPS
function forceHTTPS(req: NextRequest) {
  if (
    process.env.NODE_ENV === "production" &&
    req.headers.get("x-forwarded-proto") !== "https" &&
    !req.headers.get("host")?.includes("localhost")
  ) {
    return NextResponse.redirect(
      `https://${req.headers.get("host")}${req.nextUrl.pathname}`,
      301,
    );
  }
}

// Sequentially process an array of middleware functions (this function is to
// avoid repetition and produce cleaner code)
function processMiddleware(
  req: NextRequest,
  middlewareFns: MiddlewareFunction[],
): NextResponse {
  for (const middlewareFn of middlewareFns) {
    const fnResponse = middlewareFn(req);

    if (fnResponse) {
      return fnResponse;
    }
  }

  return NextResponse.next();
}

export default function middleware(req: NextRequest) {
  return processMiddleware(req, [forceHTTPS]);
}
