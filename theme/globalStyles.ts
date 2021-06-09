import { createGlobalStyle } from "styled-components";
import baseResets from "./base/resets";
import baseFonts from "./base/fonts";
import baseRoot from "./base/root";
import baseTypography from "./base/typography";
import baseAppearance from "./base/appearance";

const GlobalStyles = createGlobalStyle`
  ${baseResets}
  ${baseFonts}
  ${baseRoot}
  ${baseTypography}
  ${baseAppearance}]
`;

export default GlobalStyles;
