import React from "react";
import BaseDropdown from "../BaseDropdown";
import * as Styled from "./Dropdown.styles";

type BaseProps = React.ComponentProps<typeof BaseDropdown>;

/**
 * A dropdown for navigation submenus.
 */
const Dropdown = ({ disclosure, menuItems, label }: Props) => {
  const submenu = () => {
    return menuItems.map((item, i) => {
      if (item === null) return null;
      return <Styled.Item key={i}>{item}</Styled.Item>;
    });
  };

  return (
    <BaseDropdown label={label} disclosure={disclosure}>
      {({ onClick }) => (
        <Styled.DropdownWrapper onClick={onClick}>
          <Styled.List>{submenu()}</Styled.List>
        </Styled.DropdownWrapper>
      )}
    </BaseDropdown>
  );
};

interface Props extends Omit<BaseProps, "children"> {
  menuItems: (JSX.Element | null)[];
}

export default Dropdown;
