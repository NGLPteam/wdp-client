import { Story } from "@storybook/react";
import Select from "./Select";

type Props = React.ComponentProps<typeof Select>;

export default {
  title: "Components/Forms/Select",
  component: Select,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
  argTypes: {
    block: {
      control: { type: "boolean" },
    },
    hideLabel: {
      control: { type: "boolean" },
    },
    size: {
      options: ["default", "lg"],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => (
  <Select {...args}>
    <option>Select an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
);

export const Default = Template.bind({});
Default.args = {
  block: undefined,
  size: undefined,
  hideLabel: undefined,
  label: "Select",
};
