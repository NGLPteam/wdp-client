import { createGlobalStyle } from "styled-components";
import { baseResets } from "@wdp/theme";
import baseFonts from "./base/fonts";
import baseRoot from "./base/root";
import baseTypography from "./base/typography";
import baseAppearance from "./base/appearance";
import utilityAppearance from "./utility/appearance";
import utilityLayout from "./utility/layout";
import utilityTypography from "./utility/typography";

const GlobalStyles = createGlobalStyle`
  ${baseResets}
  ${baseFonts}
  ${baseRoot}
  ${baseTypography}
  ${baseAppearance}

  ${utilityAppearance}
  ${utilityLayout}
  ${utilityTypography}
`;

export default GlobalStyles;
