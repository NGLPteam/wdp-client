import IndeterminateCheckbox from "./IndeterminateCheckbox";

export default {
  title: "Components/Atomic/IndeterminateCheckbox",
  component: IndeterminateCheckbox,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template = (args) => <IndeterminateCheckbox {...args} />;
Template.args = {
  checked: false,
  indeterminate: true,
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};
