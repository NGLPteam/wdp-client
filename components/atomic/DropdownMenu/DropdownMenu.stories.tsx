import React from "react";
import { ButtonControl, Button, TopNavItem } from "components/atomic";
import DropdownMenu from "./DropdownMenu";

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
  <button key={1}>Custom item 1</button>,
  <button key={2}>Custom item 2</button>,
  <button key={3}>Custom item 3</button>,
];

export const Default = () => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": "Custom menu" }}
      disclosure={<button>Custom menu</button>}
      menuItems={MENU_ITEMS}
    />
  );
};

Default.args = {};

export const AsTopMenuItem = () => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": "Custom menu" }}
      disclosure={<TopNavItem as="button">Custom menu</TopNavItem>}
      menuItems={MENU_ITEMS}
    />
  );
};

AsTopMenuItem.args = {};

export const AsButton = () => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": "Custom menu" }}
      disclosure={<Button>Custom menu</Button>}
      menuItems={MENU_ITEMS}
    />
  );
};

AsButton.args = {};

export const AsButtonControl = () => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": "Custom menu" }}
      disclosure={<ButtonControl icon="ellipses">Custom menu</ButtonControl>}
      menuItems={MENU_ITEMS}
    />
  );
};

AsButtonControl.args = {};
