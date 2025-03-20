import React, { useState, useRef, useCallback } from "react";
import { useId } from "react";
import useFocusTrap from "@castiron/hooks/useFocusTrap";
import isFunction from "lodash/isFunction";
import useIsOutOfViewport from "hooks/useIsOutOfViewport";
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
  alignGlobal = false,
}: Props) => {
  const uid = useId();
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
      $right={alignRight || out.right}
      $global={alignGlobal}
      id={uid}
      aria-hidden={!active}
      hidden={!active}
    >
      {menuItems.map((item, i) => {
        if (item === null) return null;
        return (
          <Styled.Item key={i}>
            {item &&
              React.cloneElement(item, { $closeDropdown: closeDropdown })}
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
    disclosure:
      | React.ReactElement
      | ((props: BaseDisclosureProps) => React.ReactNode),
    disclosureProps: BaseDisclosureProps,
  ) {
    if (isFunction(disclosure)) return disclosure(disclosureProps);
    return disclosure ? React.cloneElement(disclosure, disclosureProps) : null;
  }

  return (
    <Styled.Wrapper $global={alignGlobal}>
      <div ref={wrapperRef} className={className} aria-label={label}>
        {renderDisclosure(disclosure, disclosureProps)}
        {submenu}
      </div>
    </Styled.Wrapper>
  );
};

interface Props {
  className?: string;
  disclosure:
    | React.ReactElement
    | ((props: BaseDisclosureProps) => React.ReactNode);
  label: string;
  menuItems: (React.JSX.Element | null)[];
  alignRight?: boolean;
  alignGlobal?: boolean;
}
export interface BaseDisclosureProps {
  "aria-controls": string;
  "aria-expanded": boolean;
  "aria-label": string;
  onClick: () => void;
}

export default React.memo(Dropdown);
