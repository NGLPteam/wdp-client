import { css } from "styled-components";
import { embedFont } from "@wdp/lib/theme/mixins";

export default css`
  /* Style 1 */
  ${embedFont("Ilisarniq", "Ilisarniq-Regular", "normal", 400)}
  ${embedFont("Ilisarniq", "Ilisarniq-Italic", "italic", 400)}
  ${embedFont("Ilisarniq", "Ilisarniq-Demi", "normal", 500)}
  ${embedFont("Ilisarniq", "Ilisarniq-DemiItalic", "italic", 500)}
        
  /* Style 2 */
  ${embedFont("Switzer", "Switzer-Regular", "normal", 400)}
  ${embedFont("Switzer", "Switzer-Italic", "italic", 400)}
  ${embedFont("Switzer", "Switzer-Medium", "normal", 500)}
  ${embedFont("Switzer", "Switzer-MediumItalic", "italic", 500)}

  /* Style 3 */
  ${embedFont("Sentient", "Sentient-Regular", "normal", 400)}
  ${embedFont("Sentient", "Sentient-Italic", "italic", 400)}
  ${embedFont("Sentient", "Sentient-Medium", "normal", 500)}
  ${embedFont("Sentient", "Sentient-MediumItalic", "italic", 500)}
  ${embedFont("Libre Franklin", "Libre-Franklin-Regular", "normal", 400)}
  ${embedFont("Libre Franklin", "Libre-Franklin-Italic", "italic", 400)}
  ${embedFont("Libre Franklin", "Libre-Franklin-600", "normal", 500)}
  ${embedFont("Libre Franklin", "Libre-Franklin-600-Italic", "italic", 500)}
`;
