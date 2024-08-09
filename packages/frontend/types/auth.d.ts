import "next-auth";
import type { Session as NextSession } from "next-auth";

declare module "next-auth" {
  export interface Session extends NextSession {
    accessToken: string;
    idToken: string;
    refreshToken: string;
    error?: string;
  }
}
