import Tab from "./";
import { Story } from "@storybook/react";

type Props = React.ComponentProps<typeof Tab>;

export default {
  title: "Components/Atomic/Tab",
  component: Tab,
};

export const AsLink: Story<Props> = ({ label, ...args }) => {
  return <Tab {...args}>{label}</Tab>;
};
AsLink.args = {
  active: false,
  label: "Tab",
};

const handleClick = (e) => {
  e.preventDefault();
  console.log("click!");
};

export const AsButton: Story<Props> = ({ label, ...args }) => {
  return (
    <Tab as="button" onClick={handleClick} {...args}>
      {label}
    </Tab>
  );
};
AsButton.args = {
  active: false,
  label: "Tab",
};
