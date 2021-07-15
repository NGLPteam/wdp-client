import Error from ".";

export default {
  title: "Components/Atomic/Error",
  component: Error,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Primary = ({ error }) => <Error error={error} />;

Primary.args = {
  error: { name: "Error name", message: "Error message" },
};
