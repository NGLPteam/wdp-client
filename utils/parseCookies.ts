import cookie from "cookie";
import type { IncomingMessage } from "http";

export default function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {}
  }

  return cookie.parse(req.headers.cookie || "");
}
