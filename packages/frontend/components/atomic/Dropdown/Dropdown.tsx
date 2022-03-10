import React from "react";
import BaseDropdown from "../BaseDropdown";
import * as Styled from "./Dropdown.styles";

type BaseProps = React.ComponentProps<typeof BaseDropdown>;

/**
 * A dropdown for navigation submenus.
 */
const Dropdown = ({
  disclosure,
  menuItems,
  label,
  ...dropdownProps
}: Props) => {
  return (
    <BaseDropdown label={label} disclosure={disclosure} {...dropdownProps}>
      {({ onClick }) => (
        <Styled.DropdownWrapper onClick={onClick} className="a-bg-neutral00">
          <Styled.List>
            {menuItems.map((item, i) => {
              if (item === null) return null;
              return <Styled.Item key={i}>{item}</Styled.Item>;
            })}
          </Styled.List>
        </Styled.DropdownWrapper>
      )}
    </BaseDropdown>
  );
};

interface Props extends Omit<BaseProps, "children"> {
  menuItems: (JSX.Element | null)[];
}

export default Dropdown;
