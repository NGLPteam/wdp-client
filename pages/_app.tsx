import React, { useMemo } from "react";
import Head from "next/head";
import { GlobalDataProvider } from "contexts/GlobalData";
import { ThemeProvider } from "styled-components";

import {
  SSRKeycloakProvider,
  SSRCookies,
  useKeycloak,
} from "@react-keycloak/ssr";
import { RelayEnvironmentProvider } from "relay-hooks";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import type { AppProps, AppContext } from "next/app";
import type { KeycloakInitOptions, KeycloakInstance } from "keycloak-js";

import GlobalStyles from "theme";
import AppBody from "components/global/AppBody";
import FullPageLoader from "components/global/FullPageLoader";
import useLatest from "hooks/useLatest";

import environment from "relay/environment";
import keycloakConfig from "utils/keycloak";
import parseCookies from "utils/parseCookies";
import theme from "utils/theme";

export default function NGLPApp({
  Component,
  pageProps,
  cookies,
  records: r,
}: AppProps & InitialProps) {
  useRemoveServerInjectedCSS();

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
    LoadingComponent: <FullPageLoader />,
    persistor,
  };

  return (
    <React.Fragment>
      <Head>
        <title>WDP Admin</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <GlobalStyles />
      <SSRKeycloakProvider {...ssrProps}>
        <KeycloakRelayProvider records={records}>
          <GlobalDataProvider>
            <ThemeProvider theme={theme}>
              <AppBody>
                <Component {...pageProps} />
              </AppBody>
            </ThemeProvider>
          </GlobalDataProvider>
        </KeycloakRelayProvider>
      </SSRKeycloakProvider>
    </React.Fragment>
  );
}

NGLPApp.getInitialProps = async (context: AppContext) => {
  return {
    cookies: parseCookies(context?.ctx?.req),
  };
};

type KeycloakProviderProps = React.ComponentProps<typeof SSRKeycloakProvider>;

interface InitialProps {
  cookies: unknown;
  records?: RecordMap;
}

interface KeycloakRelayProps {
  children: React.ReactNode;
  records?: RecordMap;
}

function KeycloakRelayProvider({ children, records }: KeycloakRelayProps) {
  const { keycloak } = useKeycloak<KeycloakInstance>();

  const keycloakRef = useLatest(keycloak);

  const env = useMemo(() => {
    return environment(keycloakRef, records);
  }, [records]);

  return <RelayEnvironmentProvider children={children} environment={env} />;
}

function useRemoveServerInjectedCSS() {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
}

function useDeserializeRecords(r: RecordMap | null): RecordMap {
  return useMemo<RecordMap>(() => {
    if (r) return r;

    if (typeof document !== "undefined") {
      const recordsData = document.getElementById("relay-data")?.innerHTML;

      if (recordsData) {
        const records: RecordMap = JSON.parse(
          Buffer.from(recordsData, "base64").toString()
        );

        return records;
      }
    }

    return {} as RecordMap;
  }, [r]);
}
