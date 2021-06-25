import Input from "./";

export default {
  title: "Components/Atomic/Input",
  component: Input,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template = (args) => <Input {...args} />;
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
