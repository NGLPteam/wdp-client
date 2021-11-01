import { Story } from "@storybook/react";
import { ButtonControl } from "components/atomic/buttons";
import { Search } from "components/forms";
import PageActions from "./";

type Props = React.ComponentProps<typeof PageActions>;

export default {
  title: "Components/Layout/PageActions",
  component: PageActions,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const handleSubmit = (value: string) => {
  console.info("search", value);
};

export const Default: Story<Props> = () => (
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
