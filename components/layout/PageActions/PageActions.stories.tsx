import { ButtonControl } from "components/atomic";
import { Search } from "components/forms";
import PageActions from "./";

export default {
  title: "Components/Layout/PageActions",
  component: PageActions,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const handleSubmit = (value) => {
  console.info("search", value);
};

export const Default = () => (
  <PageActions
    search={<Search onSubmit={handleSubmit} />}
    actions={[
      <ButtonControl icon="plus" key={1}>
        Action 1
      </ButtonControl>,
      <ButtonControl icon="plus" key={2}>
        Action 2
      </ButtonControl>,
    ]}
  />
);

Default.args = {};
