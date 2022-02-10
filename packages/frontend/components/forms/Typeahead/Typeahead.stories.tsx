import { Story } from "@storybook/react";
import Typeahead from "./Typeahead";

type Props = React.ComponentProps<typeof Typeahead>;

export default {
  title: "Components/Forms/Typeahead",
  component: Typeahead,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
  argTypes: {
    block: {
      control: { type: "boolean" },
    },
    size: {
      options: ["default", "lg"],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => (
  <Typeahead {...args}>
    <option>Select an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Typeahead>
);

export const Default = Template.bind({});
Default.args = {
  id: "typeahead",
  label: "Label",
};
