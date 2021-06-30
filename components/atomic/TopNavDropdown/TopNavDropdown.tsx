import React from "react";
import { TopNavItem, DropdownMenu } from "components/atomic";

// TODO: Simplify with Reakit/Menu
// TODO: Abstrct into Dropdown component that can take any styled button for activiation
const TopNavDropdown = ({ children, id, active, label }: Props) => {
  return (
    <DropdownMenu
      menuProps={{ "aria-label": label }}
      disclosure={
        <TopNavItem as="button" active={active}>
          {label}
        </TopNavItem>
      }
      menuItems={children}
    />
  );
};

interface Props {
  active?: boolean;
  children: JSX.Element[];
  id: string;
  label: string;
}

export default TopNavDropdown;
