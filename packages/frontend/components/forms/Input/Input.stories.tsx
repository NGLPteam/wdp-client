import { Story } from "@storybook/react";
import Input from "./Input";

type Props = React.ComponentProps<typeof Input>;

export default {
  title: "Components/Forms/Input",
  component: Input,
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
  },
};

const Template: Story<Props> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: undefined,
  hideLabel: undefined,
  label: "Input",
  id: "selectId",
};
