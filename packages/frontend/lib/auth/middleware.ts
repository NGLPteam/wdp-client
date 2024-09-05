import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";
import { auth } from "./initAuth";
import type { CustomMiddleware } from "@wdp/middleware";

interface Config {
  anonymousPaths?: string[];
  redirectTo?: string;
}

export default function makeAuthMiddleware({
  anonymousPaths = [],
  redirectTo,
}: Config) {
  return (middleware: CustomMiddleware) => {
    return async (
      request: NextRequest,
      event: NextFetchEvent,
      response: NextResponse,
    ) => {
      const { pathname } = request.nextUrl;

      if (!anonymousPaths?.includes(pathname) && redirectTo) {
        const session = await auth();
        if (!session?.user) {
          return NextResponse.redirect(new URL(redirectTo, request.url));
        }
      }

      return middleware(request, event, response);
    };
  };
}
