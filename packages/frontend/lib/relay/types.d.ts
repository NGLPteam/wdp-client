import { Session } from "next-auth";

export interface SessionRef {
  current?: Session;
}
