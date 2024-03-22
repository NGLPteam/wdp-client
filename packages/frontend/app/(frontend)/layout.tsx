import type { RouteParams } from "@/types/page";
import type { PropsWithChildren } from "react";

export default async function RootLayout({
  children,
  params: { lang },
}: PropsWithChildren & RouteParams) {
  return (
    <html lang={lang} dir={"ltr"}>
      <body>{children}</body>
    </html>
  );
}
