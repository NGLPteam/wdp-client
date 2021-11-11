import { createGlobalStyle } from "styled-components";
import { baseResets } from "@wdp/lib/theme";
import baseRoot from "./base/root";
import baseFonts from "./base/fonts";
import baseAppearance from "./base/appearance";
import baseTypography from "./base/typography";
import utilityAppearance from "./utility/appearance";
import utilityLayout from "./utility/layout";
import utilityTypography from "./utility/typography";

const GlobalStyles = createGlobalStyle`
  ${baseFonts}
  ${baseRoot}
  ${baseResets}
  ${baseAppearance}
  ${baseTypography}
  ${utilityAppearance}
  ${utilityLayout}
  ${utilityTypography}
`;

export default GlobalStyles;
