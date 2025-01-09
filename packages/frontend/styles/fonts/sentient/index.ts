import localFont from "next/font/local";

const SENTIENT = localFont({
  src: [
    {
      path: "./Sentient-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Sentient-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-sentient",
  adjustFontFallback: false,
});

export default SENTIENT;
