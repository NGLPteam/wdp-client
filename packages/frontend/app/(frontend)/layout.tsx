import "@/styles/global.css";

import { graphql } from "relay-runtime";
import ThemeProvider from "contexts/ThemeProvider";
import fetchQuery from "@/lib/relay/fetchQuery";
import type { RouteParams } from "@/types/page";
import ILISARNIQ from "@/styles/fonts/ilisarniq";
import SWITZER from "@/styles/fonts/switzer";
import LIBRE_FRANKLIN from "@/styles/fonts/libre-franklin";
import SENTIENT from "@/styles/fonts/sentient";
import { layoutThemeQuery as Query } from "@/relay/layoutThemeQuery.graphql";
import { getThemeClasses } from "@/styles/theme-helpers";
import type { PropsWithChildren } from "react";

export default async function RootLayout({
  children,
  params: { lang },
}: PropsWithChildren & RouteParams) {
  const { data } = await fetchQuery<Query>(query, {});

  const theme = data?.globalConfiguration?.theme;

  return (
    <html
      lang={lang}
      dir={"ltr"}
      className={`${ILISARNIQ.variable} ${SWITZER.variable} ${
        LIBRE_FRANKLIN.variable
      } ${SENTIENT.variable} ${getThemeClasses(theme)}`}
    >
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}

const query = graphql`
  query layoutThemeQuery {
    globalConfiguration {
      theme {
        color
        font
      }
    }
  }
`;
