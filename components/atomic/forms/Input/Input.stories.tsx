import Input from ".";
import { Story } from "@storybook/react";

type Props = React.ComponentProps<typeof Input>;

export default {
  title: "Components/Atomic/Forms/Input",
  component: Input,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => <Input {...args} />;
Template.args = {
  type: "string",
  label: "Label",
  inputProps: {
    placeholder: "Placeholder text",
  },
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};
