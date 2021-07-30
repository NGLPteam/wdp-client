import React from "react";
import BaseDropdown from "./BaseDropdown";
import * as Styled from "./Dropdown.styles";

/**
 * A dropdown for navigation submenus.
 * Adds appropriate aria labels and open/close functionality.
 */
function Dropdown({ disclosure, menuItems, label, isDarkMode }: Props) {
  const submenu = (
    <Styled.List className={isDarkMode ? "a-bg-brand90" : "a-bg-brand10"}>
      {menuItems.map((item, i) => {
        if (item === null) return null;
        return <Styled.Item key={i}>{React.cloneElement(item)}</Styled.Item>;
      })}
    </Styled.List>
  );

  return (
    <Styled.Wrapper>
      <BaseDropdown
        className=""
        label={label}
        disclosure={disclosure}
        submenu={submenu}
      />
    </Styled.Wrapper>
  );
}

interface Props {
  disclosure: JSX.Element;
  menuItems: (JSX.Element | null)[];
  label: string;
  isDarkMode?: boolean;
}

export default React.memo(Dropdown);
