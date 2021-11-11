import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ fontStyle: "fontStyle1", colorStyle: "cream" }}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
