import GlobalStyles from "../theme/globalStyles";
import { colors } from "../theme/base/variables";
import get from "lodash/get";
import { I18nextProvider } from "react-i18next";
import { Story } from "@storybook/react";
import * as nextImage from "next/image";
import i18n from "../helpers/i18n";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    const {
      src,
      alt,
      width,
      height,
      objectFit = "contain",
      objectPosition = "bottom left",
      className,
    } = props;
    const wrapperStyle =
      objectFit !== "cover"
        ? {}
        : {
            position: "absolute",
            inset: 0,
            inlineSize: "100%",
            blockSize: "100%",
          };
    const style = {
      objectFit,
      objectPosition,
      blockSize: objectFit === "cover" ? "100%" : "auto",
    };
    return (
      <div className={className}>
        <img src={src} alt={alt} width={width} height={height} style={style} />
      </div>
    );
  },
});

export const decorators = [
  (Story: Story) => (
    <I18nextProvider i18n={i18n}>
      <GlobalStyles />
      <Story />
    </I18nextProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  themes: {
    default: "neutral00",
    list: [
      {
        name: "neutral00",
        class: "a-bg-neutral00",
        color: `var(--neutral00, ${get(colors, "neutral.00")})`,
      },
      {
        name: "brand10",
        class: "a-bg-brand10",
        color: `var(--brand10, ${get(colors, "brand.10")})`,
      },
      {
        name: "brand100",
        class: "a-bg-brand100",
        color: `var(--brand100, ${get(colors, "brand.100")})`,
      },
    ],
  },
  backgrounds: { disable: true }, // disabled in favor of themes
};
