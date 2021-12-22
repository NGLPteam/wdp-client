import { Story } from "@storybook/react";
import { Button } from "..";
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
  <button key={4} onClick={() => console.info("clicked!")}>
    Button with click event
  </button>,
];

const Template: Story<Props> = (args) => (
  <>
    <Dropdown
      {...args}
      disclosure={
        <Button size="sm" icon="chevronDown">
          Toggle
        </Button>
      }
    />{" "}
    <Dropdown
      {...args}
      disclosure={
        <Button size="sm" icon="chevronDown" secondary>
          Toggle
        </Button>
      }
    />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: "Example",
  menuItems: MENU_ITEMS,
};
