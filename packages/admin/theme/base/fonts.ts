import { css } from "styled-components";
import { embedFont } from "@wdp/theme/mixins";

export default css`
  ${embedFont("Karla", "Karla-Regular", "normal", 400)}
  ${embedFont("Karla", "Karla-Italic", "italic", 400)}
  ${embedFont("Karla", "Karla-Bold", "normal", 700)}
  ${embedFont("Karla", "Karla-Bold-Italic", "italic", 700)}
  ${embedFont("Karla", "Karla-Medium", "normal", 500)}
  ${embedFont("Karla", "Karla-SemiBold", "normal", 600)}
  ${embedFont("Karla", "Karla-SemiBold", "normal", 600)}
`;
