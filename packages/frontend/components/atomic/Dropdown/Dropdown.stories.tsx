import { Story } from "@storybook/react";
import Dropdown from "./Dropdown";
import { Button, Link } from "components/atomic";

type Props = React.ComponentProps<typeof Dropdown>;

export default {
  title: "Components/Atomic/Dropdown",
  component: Dropdown,
};

const MENU_ITEMS = [
  <Link href="#" key={1}>
    Item One
  </Link>,
  <Link href="#" key={2}>
    Item Two
  </Link>,
  <Link href="#" key={3}>
    Item Three
  </Link>,
  <Link
    as="button"
    key={4}
    onClick={() => console.info("clicked!")}
    icon="arrowRight"
  >
    Button with click event
  </Link>,
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
