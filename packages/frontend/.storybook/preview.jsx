import GlobalStyles from "theme/globalStyles";
import { baseColors, customColors } from "theme/base/variables";
import * as nextImage from "next/image";
import { ThemeProvider } from "styled-components";
import { RouterContext } from "next/dist/shared/lib/router-context";
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
      focalPoint = [0.5, 0.5],
      className,
    } = props;
    const objectPosition = focalPoint
      .map((coord) => coord * 100 + "%")
      .join(" ");
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
      width: objectFit === "cover" ? "100%" : "auto",
    };
    return (
      <div style={wrapperStyle} className={className}>
        <img src={src} alt={alt} width={width} height={height} style={style} />
      </div>
    );
  },
});

export const decorators = [
  (Story, context) => {
    const { fontStyle, colorStyle } = context.globals;
    const theme = { fontStyle, colorStyle };

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {Story()}
      </ThemeProvider>
    );
  },
];

export const globalTypes = {
  fontStyle: {
    name: "Font Style",
    description: "Change the theme's font style",
    defaultValue: "fontStyle1",
    toolbar: {
      icon: "paragraph",
      items: [
        { value: "fontStyle1", title: "Font Style 1" },
        { value: "fontStyle2", title: "Font Style 2" },
        { value: "fontStyle3", title: "Font Style 3" },
      ],
    },
  },
  colorStyle: {
    name: "Color Style",
    description: "Change the theme's color style",
    defaultValue: "cream",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "cream", title: "Cream" },
        { value: "blue", title: "Blue" },
        { value: "gray", title: "Gray" },
      ],
    },
  },
};

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  themes: {
    default: "neutral00",
    list: [
      {
        name: "neutral00",
        class: "a-bg-neutral00",
        color: `var(--color-base-neutral00, ${baseColors.neutral00})`,
      },
      {
        name: "custom10",
        class: "a-bg-custom10",
        color: `var(--color-custom10, ${customColors.cream10})`,
      },
      {
        name: "custom20",
        class: "a-bg-custom20",
        color: `var(--color-custom20, ${customColors.cream20})`,
      },
      {
        name: "neutral80",
        class: "a-bg-neutral80",
        color: `var(--color-base-neutral80, ${baseColors.neutral80})`,
      },
      {
        name: "neutral90",
        class: "a-bg-neutral90",
        color: `var(--color-base-neutral90, ${baseColors.neutral90})`,
      },
    ],
  },
  backgrounds: { disable: true }, // disabled in favor of themes
  i18n,
  locale: DEFAULT_LNG,
  locales: SUPPORTED_LOCALES,
};
