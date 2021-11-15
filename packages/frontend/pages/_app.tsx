import { useMemo } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
// If using Keycloak, replace RelayEnvironmentProvider with KeycloakRelayProvider
import { RelayEnvironmentProvider } from "relay-hooks";
import {
  useRemoveServerInjectedCSS,
  useDeserializeRecords,
  environment,
} from "@wdp/lib/app";
import type { Page } from "@wdp/lib/types/page";
import { RouterContextProvider } from "@wdp/lib/routes";
import { AppHtmlHead, AppBody } from "../components/global";
import GlobalStyles from "../theme";
import { updateI18n } from "../i18n";
import { baseRoutes } from "../routes/baseRoutes";

function App({ Component, pageProps, records: r }: AppProps & InitialProps) {
  useRemoveServerInjectedCSS();

  updateI18n("en");

  const records = useDeserializeRecords(r);

  const env = useMemo(() => {
    return environment(records);
  }, [records]);

  const defaultLayout = ({
    PageComponent,
    pageComponentProps,
  }: {
    PageComponent: typeof Component;
    pageComponentProps: typeof pageProps;
  }) => <PageComponent {...pageComponentProps} />;

  const getLayout = Component.getLayout || defaultLayout;

  return (
    <>
      <AppHtmlHead />
      <ThemeProvider theme={{ fontStyle: "fontStyle1", colorStyle: "cream" }}>
        <GlobalStyles />
        <RelayEnvironmentProvider environment={env}>
          <RouterContextProvider baseRoutes={baseRoutes}>
            <AppBody>
              {getLayout({
                PageComponent: Component,
                pageComponentProps: pageProps,
              })}
            </AppBody>
          </RouterContextProvider>
        </RelayEnvironmentProvider>
      </ThemeProvider>
    </>
  );
}
export default App;

interface InitialProps {
  cookies?: Record<string, string>;
  records?: RecordMap;
  Component: Page;
}
