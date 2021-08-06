import React from "react";
import useIsOutOfViewport from "hooks/useIsOutOfViewport";
import BaseDropdown from "./BaseDropdown";
import * as Styled from "./Dropdown.styles";

/**
 * A dropdown for navigation submenus.
 * Adds appropriate aria labels and open/close functionality.
 */
function Dropdown({ disclosure, menuItems, label }: Props) {
  const [elRef, out] = useIsOutOfViewport<HTMLUListElement>();

  const submenu = (
    <Styled.List ref={elRef} right={out.right}>
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
}

export default React.memo(Dropdown);
