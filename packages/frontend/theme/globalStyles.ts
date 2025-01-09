import { createGlobalStyle } from "styled-components";
import { baseResets } from "@wdp/lib/theme";
import baseFonts from "./base/fonts";
import baseAppearance from "./base/appearance";
import baseTypography from "./base/typography";

const GlobalStyles = createGlobalStyle`
  @layer styled-components {
    ${baseFonts}
    ${baseResets}
    ${baseAppearance}
    ${baseTypography}
  }
`;

export default GlobalStyles;
