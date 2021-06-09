import { embedFonts } from "@castiron/style-mixins";

const FONTS = [
  {
    name: `"Karla"`,
    fileName: "Karla-Regular",
    weight: 400,
    style: "normal",
  },
  {
    name: `"Karla"`,
    fileName: "Karla-Italic",
    weight: 400,
    style: "italic",
  },
  {
    name: `"Karla"`,
    fileName: "Karla-Bold",
    weight: 700,
    style: "normal",
  },
  {
    name: `"Karla"`,
    fileName: "Karla-Bold-Italic",
    weight: 700,
    style: "italic",
  },
];

export default `
  ${embedFonts(FONTS)}
`;
