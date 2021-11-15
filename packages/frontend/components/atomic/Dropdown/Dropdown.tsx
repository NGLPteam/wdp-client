import React, { useState, useRef, useCallback } from "react";
import { useUID } from "react-uid";
import useIsOutOfViewport from "@wdp/lib/hooks/useIsOutOfViewport";
import { useFocusTrap } from "@castiron/hooks/";
import isFunction from "lodash/isFunction";
import * as Styled from "./Dropdown.styles";

/**
 * A dropdown for navigation submenus.
 * Adds appropriate aria labels and open/close functionality.
 */
const Dropdown = ({
  className,
  disclosure,
  menuItems,
  label,
  alignRight = false,
}: Props) => {
  const uid = useUID();
  const wrapperRef = useRef(null);
  const [active, setActive] = useState(false);
  const [elRef, out] = useIsOutOfViewport<HTMLUListElement>();

  const closeDropdown = useCallback(() => setActive(false), [setActive]);
  useFocusTrap(wrapperRef, active, {
    onDeactivate: closeDropdown,
  });

  const submenu = (
    <Styled.List
      ref={elRef}
      right={alignRight || out.right}
      id={uid}
      aria-hidden={!active}
      hidden={!active}
    >
      {menuItems.map((item, i) => {
        if (item === null) return null;
        return (
          <Styled.Item key={i}>
            {item && React.cloneElement(item, { closeDropdown: closeDropdown })}
          </Styled.Item>
        );
      })}
    </Styled.List>
  );

  const disclosureProps = {
    "aria-controls": uid,
    "aria-expanded": active,
    "aria-label": `Show ${label}`,
    onClick: () => setActive((prevState) => !prevState),
  };

  function renderDisclosure(
    disclosure: JSX.Element | ((props: BaseDisclosureProps) => void),
    disclosureProps: BaseDisclosureProps
  ) {
    if (isFunction(disclosure)) return disclosure(disclosureProps);
    return React.cloneElement(disclosure, disclosureProps);
  }

  return (
    <Styled.Wrapper>
      <div ref={wrapperRef} className={className} aria-label={label}>
        {renderDisclosure(disclosure, disclosureProps)}
        {submenu}
      </div>
    </Styled.Wrapper>
  );
};

interface Props {
  className?: string;
  disclosure: JSX.Element | ((props: BaseDisclosureProps) => void);
  label: string;
  menuItems: (JSX.Element | null)[];
  alignRight?: boolean;
}
export interface BaseDisclosureProps {
  "aria-controls": string;
  "aria-expanded": boolean;
  "aria-label": string;
  onClick: () => void;
}

export default React.memo(Dropdown);
