import React from "react";
import { TopNavItem } from "components/atomic";
import { ButtonControl, Button } from "components/atomic/buttons";
import DropdownMenu from "./";

export default {
  title: "Components/Atomic/DropdownMenu",
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

export const Default = (args) => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": "Custom menu" }}
      disclosure={<button>Custom menu</button>}
      menuItems={MENU_ITEMS}
      {...args}
    />
  );
};

Default.args = {
  isMainNav: false,
};

export const WithTopMenuItem = () => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": "Custom menu" }}
      disclosure={<TopNavItem as="button">Custom menu</TopNavItem>}
      menuItems={MENU_ITEMS}
    />
  );
};

WithTopMenuItem.args = { ...Default.args };

export const WithButton = () => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": "Custom menu" }}
      disclosure={<Button>Custom menu</Button>}
      menuItems={MENU_ITEMS}
    />
  );
};

WithButton.args = { ...Default.args };

export const WithButtonControl = () => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": "Custom menu" }}
      disclosure={<ButtonControl icon="ellipses">Custom menu</ButtonControl>}
      menuItems={MENU_ITEMS}
    />
  );
};

WithButtonControl.args = { ...Default.args };
