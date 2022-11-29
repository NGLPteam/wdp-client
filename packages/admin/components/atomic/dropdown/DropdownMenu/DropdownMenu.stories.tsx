import { Story } from "@storybook/react";
import DropdownMenu from ".";
import { ButtonControl, Button } from "components/atomic";

type Props = React.ComponentProps<typeof DropdownMenu>;

export default {
  title: "Components/Atomic/Dropdowns/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    themes: {
      default: "brand100",
    },
  },
};

const MENU_ITEMS = [
  <button key={1}>Custom</button>,
  <button key={2}>Custom item 2</button>,
  <button key={3}>Custom item 3</button>,
];

export const Default: Story<Props> = ({ isMainNav }) => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": "Custom menu" }}
      disclosure={<button>Custom menu</button>}
      menuItems={MENU_ITEMS}
      isMainNav={isMainNav}
    />
  );
};

Default.args = {
  isMainNav: false,
};

export const WithButton: Story<Props> = () => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": "Custom menu" }}
      disclosure={<Button>Custom menu</Button>}
      menuItems={MENU_ITEMS}
    />
  );
};

WithButton.args = { ...Default.args };

export const WithButtonControl: Story<Props> = () => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": "Custom menu" }}
      disclosure={<ButtonControl icon="ellipses">Custom menu</ButtonControl>}
      menuItems={MENU_ITEMS}
    />
  );
};

WithButtonControl.args = { ...Default.args };
