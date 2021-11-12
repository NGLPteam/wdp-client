import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useRemoveServerInjectedCSS } from "@wdp/lib/app";
import type { Page } from "@wdp/lib/types/page";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { AppHtmlHead, AppBody } from "../components/global";
import GlobalStyles from "../theme";
import { updateI18n } from "../i18n";

function App({ Component, pageProps }: AppProps & InitialProps) {
  useRemoveServerInjectedCSS();
  updateI18n("en");

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
        <AppBody>
          {getLayout({
            PageComponent: Component,
            pageComponentProps: pageProps,
          })}
        </AppBody>
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
