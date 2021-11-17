import { Story } from "@storybook/react";
import Dropdown from "./Dropdown";

type Props = React.ComponentProps<typeof Dropdown>;

export default {
  title: "Components/Atomic/Dropdown",
  component: Dropdown,
};

const MENU_ITEMS = [
  <a href="#" key={1}>
    Item One
  </a>,
  <a href="#" key={2}>
    Item Two
  </a>,
  <a href="#" key={3}>
    Item Three
  </a>,
];

const Template: Story<Props> = (args) => (
  <>
    <Dropdown {...args} />
    <Dropdown {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: "Example",
  disclosure: <button>Toggle</button>,
  menuItems: MENU_ITEMS,
};
