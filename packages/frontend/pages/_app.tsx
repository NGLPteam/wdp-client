import type { AppProps, AppContext } from "next/app";
import { ThemeProvider } from "styled-components";
import type { KeycloakInitOptions } from "keycloak-js";
import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr";
import {
  parseCookies,
  useRemoveServerInjectedCSS,
  useDeserializeRecords,
} from "@wdp/lib/app";
import { KeycloakRelayProvider, keycloakConfig } from "@wdp/lib/keycloak";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import type { Page } from "@wdp/lib/types/page";
import { AppHtmlHead } from "components/global";
import { updateI18n } from "i18n";
import GlobalStyles from "theme";
import { AppContextProvider } from "contexts";

type KeycloakProviderProps = React.ComponentProps<typeof SSRKeycloakProvider>;
function App({
  Component,
  pageProps,
  cookies = {},
  records: r,
}: AppProps & InitialProps) {
  useRemoveServerInjectedCSS();

  updateI18n("en");

  const records = useDeserializeRecords(r);

  const persistor = SSRCookies(cookies);

  const initOptions: KeycloakInitOptions = {
    onLoad: "check-sso",
  };

  if (typeof window !== "undefined" && window?.location?.origin) {
    initOptions.silentCheckSsoRedirectUri = `${window.location.origin}/silent-sso.html`;
  }

  const ssrProps: KeycloakProviderProps = {
    initOptions,
    keycloakConfig,
    persistor,
  };

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
        <SSRKeycloakProvider {...ssrProps}>
          <KeycloakRelayProvider records={records}>
            <AppContextProvider>
              {getLayout({
                PageComponent: Component,
                pageComponentProps: pageProps,
              })}
            </AppContextProvider>
          </KeycloakRelayProvider>
        </SSRKeycloakProvider>
      </ThemeProvider>
    </>
  );
}
export default App;

App.getInitialProps = async (context: AppContext) => {
  return {
    cookies: parseCookies(context?.ctx?.req) || {},
    pageProps: {},
  };
};

interface InitialProps {
  cookies?: Record<string, string>;
  records?: RecordMap;
  Component: Page;
}
