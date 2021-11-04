import get from "lodash/get";
import { Story } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import * as nextImage from "next/image";
import { RouterContext } from "next/dist/shared/lib/router-context";
import GlobalStyles from "../theme/globalStyles";
import { colors } from "../theme/base/variables";
import i18n, { SUPPORTED_LOCALES, DEFAULT_LNG } from "../i18n";

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
    <>
      <GlobalStyles />
      <Story />
    </>
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
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: {
      galaxyFold: {
        name: "Galaxy Fold",
        styles: {
          width: "280px",
          height: "653px",
        },
        type: "mobile",
      },
      ...INITIAL_VIEWPORTS,
    },
  },
  i18n,
  locale: DEFAULT_LNG,
  locales: SUPPORTED_LOCALES,
  grid: {
    gridOn: false,
    columns: 12,
    gutter: 0,
    gap: "16px",
    maxWidth: "1000px",
  },
};
