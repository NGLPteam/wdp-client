import React from "react";
import BaseDropdown from "../BaseDropdown";
import * as Styled from "./Dropdown.styles";

type BaseProps = React.ComponentProps<typeof BaseDropdown>;

/**
 * A dropdown for navigation submenus.
 */
const Dropdown = ({ disclosure, menuItems, label }: Props) => {
  const submenu = (onClick: React.MouseEventHandler | undefined) => {
    return menuItems.map((item, i) => {
      if (item === null) return null;
      return (
        <Styled.Item key={i}>
          {item && React.cloneElement(item, { onClick })}
        </Styled.Item>
      );
    });
  };

  return (
    <BaseDropdown label={label} disclosure={disclosure}>
      {({ onClick }) => (
        <Styled.DropdownWrapper>
          <Styled.List>{submenu(onClick)}</Styled.List>
        </Styled.DropdownWrapper>
      )}
    </BaseDropdown>
  );
};

interface Props extends Omit<BaseProps, "children"> {
  menuItems: (JSX.Element | null)[];
}

export default Dropdown;
