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

  return (
    <Styled.Wrapper>
      <BaseDropdown
        ref={elRef}
        out={out}
        className=""
        label={label}
        disclosure={disclosure}
        menuItems={menuItems}
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
