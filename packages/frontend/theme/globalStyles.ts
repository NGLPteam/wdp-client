import { createGlobalStyle } from "styled-components";
import { baseResets } from "@wdp/lib/theme";
import baseFonts from "./base/fonts";

const GlobalStyles = createGlobalStyle`
  @layer styled-components {
    ${baseFonts}
    ${baseResets}
  }
`;

export default GlobalStyles;
