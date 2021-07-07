import React from "react";
import { Dropdown } from "components/atomic";
import { MainNavItem } from "../";

// TODO: Simplify with Reakit/Menu
// TODO: Abstrct into Dropdown component that can take any styled button for activiation
const MainNavDropdown = ({ children, active, label }: Props) => {
  return (
    <Dropdown
      label={label}
      disclosure={
        <MainNavItem as="button" active={active}>
          {label}
        </MainNavItem>
      }
      menuItems={children}
      isDarkMode
    />
  );
};

interface Props {
  active?: boolean;
  children: JSX.Element[];
  label: string;
}

export default MainNavDropdown;
