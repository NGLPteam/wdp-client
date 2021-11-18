import GlobalStyles from "theme/globalStyles";
import * as nextImage from "next/image";
import { ThemeProvider } from "styled-components";

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
    } = props;
    const style = {
      objectFit,
      objectPosition,
      blockSize: objectFit === "cover" ? "100%" : "auto",
    };
    return (
      <img src={src} alt={alt} width={width} height={height} style={style} />
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
      ],
    },
  },
};

export const parameters = {};
