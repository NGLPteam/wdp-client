import get from "lodash/get";
import GlobalStyles from "../theme/globalStyles";
import { customColors } from "../theme/base/variables";
import { ThemeProvider } from "styled-components";

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
