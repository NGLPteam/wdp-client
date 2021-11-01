import { css } from "styled-components";

function fontFace(
  name: string,
  filename: string,
  style = "normal",
  weight = 400
) {
  return `
    @font-face {
      font-family: ${name};
      font-style: ${style};
      font-weight: ${weight};
      font-display: block;
      src: url("/fonts/${filename}.woff2") format("woff2"),
        url("/fonts/${filename}.woff") format("woff");
    }
  `;
}

export default css`
  ${fontFace("Karla", "Karla-Regular", "normal", 400)}
  ${fontFace("Karla", "Karla-Italic", "italic", 400)}
  ${fontFace("Karla", "Karla-Bold", "normal", 700)}
  ${fontFace("Karla", "Karla-Bold-Italic", "italic", 700)}
  ${fontFace("Karla", "Karla-Medium", "normal", 500)}
  ${fontFace("Karla", "Karla-SemiBold", "normal", 600)}
  ${fontFace("Karla", "Karla-SemiBold", "normal", 600)}
`;
