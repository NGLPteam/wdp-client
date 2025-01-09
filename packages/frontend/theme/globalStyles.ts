import { createGlobalStyle } from "styled-components";
import { baseResets } from "@wdp/lib/theme";
import baseRoot from "./base/root";
import baseFonts from "./base/fonts";
import baseAppearance from "./base/appearance";
import baseTypography from "./base/typography";

const GlobalStyles = createGlobalStyle`
  @layer styled-components {
    ${baseFonts}
    ${baseRoot}
    ${baseResets}
    ${baseAppearance}
    ${baseTypography}
  }
`;

export default GlobalStyles;
