import { useState } from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Atomic/Forms/Checkbox",
  component: Checkbox,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template = (args) => <Checkbox {...args} />;
Template.args = {
  indeterminate: true,
  children: "Checkbox with Intermediate state",
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
  disabled: false,
};

export const Controlled = ({ checked: initCheck, ...args }) => {
  const [checked, setChecked] = useState(initCheck);
  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <Checkbox checked={checked} onChange={handleToggle} {...args}>
      {args.children}
    </Checkbox>
  );
};
Controlled.args = {
  ...Template.args,
  children: "Controlled checkbox",
  checked: true,
};
