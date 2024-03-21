import { chain } from "@wdp/middleware";
import https from "@wdp/middleware/src/https";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default chain([https]);
