import { createGlobalStyle } from "styled-components";
import { baseResets } from "@wdp/lib/theme";

const GlobalStyles = createGlobalStyle`
  ${baseResets}
`;

export default GlobalStyles;
