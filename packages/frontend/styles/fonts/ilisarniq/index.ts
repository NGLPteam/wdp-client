import localFont from "next/font/local";

const ILISARNIQ = localFont({
  src: [
    {
      path: "./Ilisarniq-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Ilisarniq-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Ilisarniq-Demi.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Ilisarniq-DemiItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-ilisarniq",
  adjustFontFallback: false,
});

export default ILISARNIQ;
