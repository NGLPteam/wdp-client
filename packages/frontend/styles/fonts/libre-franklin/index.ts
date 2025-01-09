import localFont from "next/font/local";

const LIBRE_FRANKLIN = localFont({
  src: [
    {
      path: "./Libre-Franklin-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Libre-Franklin-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Libre-Franklin-600.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Libre-Franklin-600-Italic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-libre-franklin",
  adjustFontFallback: false,
});

export default LIBRE_FRANKLIN;
