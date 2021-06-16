import GlobalStyles from "../theme/globalStyles";
import { colors } from "../theme/base/variables";
import get from "lodash/get";

export const decorators = [
  (Story) => (
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
        name: "brand100",
        class: "a-bg-brand100",
        color: `var(--brand100, ${get(colors, "brand.100")})`,
      },
    ],
  },
  backgrounds: { disable: true }, // disabled in favor of themes
};
