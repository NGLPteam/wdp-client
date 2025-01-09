import "@/styles/global.css";

import { unstable_noStore as noStore } from "next/cache";
import type { RouteParams } from "@/types/page";
import type { PropsWithChildren } from "react";
import ILISARNIQ from "@/styles/fonts/ilisarniq";
import SWITZER from "@/styles/fonts/switzer";
import LIBRE_FRANKLIN from "@/styles/fonts/libre-franklin";
import SENTIENT from "@/styles/fonts/sentient";

export default async function RootLayout({
  children,
  params: { lang },
}: PropsWithChildren & RouteParams) {
  // We need dynamic routing for all our routes, because
  // we need runtime environment variable derivation.
  noStore();

  return (
    <html
      lang={lang}
      dir={"ltr"}
      className={`${ILISARNIQ.variable} ${SWITZER.variable} ${LIBRE_FRANKLIN.variable} ${SENTIENT.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

export const dynamic = "force-dynamic";
