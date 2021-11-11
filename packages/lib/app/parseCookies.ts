import type { IncomingMessage } from "http";
import cookie from "cookie";

export default function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {};
  }

  return cookie.parse(req.headers.cookie || "");
}
