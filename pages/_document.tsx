import * as React from "react";
import "regenerator-runtime/runtime";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from "next/document";
import { RelayEnvironmentProvider } from "relay-hooks";
import { SSRCookies } from "@react-keycloak/ssr";
import RelayServerSSR from "react-relay-network-modern-ssr/lib/server";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { ServerStyleSheet } from "styled-components";

import Layout from "components/Layout";

import initialEnvironment from "relay/initialEnvironment";
import parseCookies from "utils/parseCookies";

export default class extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & Props> {
    const sheet = new ServerStyleSheet();

    const cookies = parseCookies(ctx?.req);
    const ssrCookies = SSRCookies(cookies);

    const originalRenderPage = ctx.renderPage;
    const relayServerSSR = new RelayServerSSR();
    const env = initialEnvironment(relayServerSSR, ssrCookies, ctx);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceComponent: (Component) => (props) => {
          return (
            <RelayEnvironmentProvider environment={env}>
              <Layout>
                <Component {...props} />
              </Layout>
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
                // @ts-expect-error
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
          sheet.getStyleElement()
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <template id="relay-data">
            {
              Buffer.from(
                JSON.stringify(this.props.records)
              ).toString("base64")
            }
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