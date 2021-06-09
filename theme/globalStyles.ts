import { createGlobalStyle } from "styled-components";
import baseResets from "./base/resets";
import baseFonts from "./base/fonts";
import baseRoot from "./base/root";
import baseTypography from "./base/typography";
import baseAppearance from "./base/appearance";
import utilityLayout from "./utility/layout";

const GlobalStyles = createGlobalStyle`
  ${baseResets}
  ${baseFonts}
  ${baseRoot}
  ${baseTypography}
  ${baseAppearance}

  ${utilityLayout}
`;

export default GlobalStyles;
