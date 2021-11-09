import GlobalStyles from "../theme/globalStyles";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      {Story()}
    </>
  ),
];

export const parameters = {};
