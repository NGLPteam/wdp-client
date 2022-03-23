import get from "lodash/get";
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
  (Story) => (
    <>
      <GlobalStyles />
      {Story()}
    </>
  ),
];

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
  i18n,
  locale: DEFAULT_LNG,
  locales: SUPPORTED_LOCALES,
};
