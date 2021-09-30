import React, { useState, useRef, useCallback, forwardRef } from "react";
import { useUID } from "react-uid";
import { useFocusTrap } from "@castiron/hooks/";
import isFunction from "lodash/isFunction";
import * as Styled from "./Dropdown.styles";

/**
 * A dropdown for navigation submenus.
 * Adds appropriate aria labels and open/close functionality.
 */
const BaseDropdown = forwardRef<HTMLUListElement, Props>(
  ({ className, disclosure, menuItems, out, label }, elRef) => {
    const uid = useUID();
    const wrapperRef = useRef(null);
    const [active, setActive] = useState(false);

    const closeDropdown = useCallback(() => setActive(false), [setActive]);
    useFocusTrap(wrapperRef, active, {
      onDeactivate: closeDropdown,
    });

    const submenu = (
      <Styled.List
        ref={elRef}
        right={out.right}
        id={uid}
        aria-hidden={!active}
        hidden={!active}
      >
        {menuItems.map((item, i) => {
          if (item === null) return null;
          return (
            <Styled.Item key={i}>
              {React.cloneElement(item, { closeDropdown: closeDropdown })}
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
      <div ref={wrapperRef} className={className} aria-label={label}>
        {renderDisclosure(disclosure, disclosureProps)}
        {submenu}
      </div>
    );
  }
);

interface Out {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
  any: boolean;
  all: boolean;
}
interface Props {
  className?: string;
  disclosure: JSX.Element | ((props: BaseDisclosureProps) => void);
  label: string;
  menuItems: (JSX.Element | null)[];
  out: Out;
}
export interface BaseDisclosureProps {
  "aria-controls": string;
  "aria-expanded": boolean;
  "aria-label": string;
  onClick: () => void;
}

export default React.memo(BaseDropdown);
