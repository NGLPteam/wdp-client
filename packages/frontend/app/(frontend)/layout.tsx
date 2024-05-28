import { unstable_noStore as noStore } from "next/cache";
import type { RouteParams } from "@/types/page";
import type { PropsWithChildren } from "react";

export default async function RootLayout({
  children,
  params: { lang },
}: PropsWithChildren & RouteParams) {
  // We need dynamic routing for all our routes, because
  // we need runtime environment variable derivation.
  noStore();

  return (
    <html lang={lang} dir={"ltr"}>
      <body>{children}</body>
    </html>
  );
}

export const dynamic = "force-dynamic";
