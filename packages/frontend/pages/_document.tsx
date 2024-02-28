import * as React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { RelayEnvironmentProvider } from "react-relay";
import RelayServerSSR from "react-relay-network-modern-ssr/lib/server";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import { initialEnvironment } from "@wdp/lib/app";
import AppBody from "components/global/AppBody";

const FONTS = [
  "Ilisarniq-Regular",
  "Ilisarniq-Italic",
  "Ilisarniq-Demi",
  "Ilisarniq-DemiItalic",
  "Switzer-Regular",
  "Switzer-Italic",
  "Switzer-Medium",
  "Switzer-MediumItalic",
  "Sentient-Regular",
  "Sentient-Italic",
  "Libre-Franklin-Regular",
  "Libre-Franklin-Italic",
  "Libre-Franklin-600",
  "Libre-Franklin-600-Italic",
];

export default class AppDocument extends Document<Props> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps & Props> {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    const relayServerSSR = new RelayServerSSR();
    const env = initialEnvironment();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceComponent: (Component) => (props) => {
          return (
            <RelayEnvironmentProvider environment={env}>
              <StyleSheetManager sheet={sheet.instance}>
                <AppBody>
                  <Component {...props} />
                </AppBody>
              </StyleSheetManager>
            </RelayEnvironmentProvider>
          );
        },
      });

    await Document.getInitialProps(ctx);
    await relayServerSSR.getCache();

    const records = env.getStore().getSource().toJSON();

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => {
            return sheet.collectStyles(
              <App
                {...props}
                // @ts-expect-error scaffolding
                records={records}
              />
            );
          },
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        records,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          sheet.getStyleElement(),
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {FONTS.map((font) => (
            <React.Fragment key={font}>
              <link
                rel="preload"
                href={`/fonts/${font}.woff2`}
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
              />
              <link
                rel="preload"
                href={`/fonts/${font}.woff`}
                as="font"
                type="font/woff"
                crossOrigin="anonymous"
              />
            </React.Fragment>
          ))}
        </Head>
        <body>
          <span
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: "0",
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0 0 0 0)",
            }}
            aria-hidden
          >
            <span style={{ fontFamily: "Ilisarniq" }}>Ilisarniq</span>
            <span style={{ fontFamily: "Libre Franklin" }}>Libre Franklin</span>
            <span style={{ fontFamily: "Sentient" }}>Sentient</span>
            <span style={{ fontFamily: "Switzer" }}>Switzer</span>
          </span>
          <span style={{ display: "none" }}>build-test-frontend-1</span>
          <template id="relay-data">
            {Buffer.from(JSON.stringify(this.props.records)).toString("base64")}
          </template>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

interface Props {
  records: RecordMap;
}
