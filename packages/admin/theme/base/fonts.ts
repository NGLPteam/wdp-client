import { embedFonts } from "@castiron/style-mixins";

const fontsList = [
  { name: "Karla", fileName: "Karla-Regular", style: "normal", weight: 400 },
  { name: "Karla", fileName: "Karla-Italic", style: "italic", weight: 400 },
  { name: "Karla", fileName: "Karla-Bold", style: "normal", weight: 700 },
  {
    name: "Karla",
    fileName: "Karla-Bold-Italic",
    style: "italic",
    weight: 700,
  },
  { name: "Karla", fileName: "Karla-Medium", style: "normal", weight: 500 },
  { name: "Karla", fileName: "Karla-SemiBold", style: "normal", weight: 600 },
];

const fonts = `
  ${embedFonts(fontsList)}
`;

export default fonts;
