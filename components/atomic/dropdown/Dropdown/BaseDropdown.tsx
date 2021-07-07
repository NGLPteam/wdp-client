import React, { useState, useRef, useCallback } from "react";
import { useUID } from "react-uid";
import { useFocusTrap } from "@castiron/hooks/";
import isFunction from "lodash/isFunction";

/**
 * A dropdown for navigation submenus.
 * Adds appropriate aria labels and open/close functionality.
 */
function BaseDropdown({ className, disclosure, submenu, label }) {
  const uid = useUID();
  const wrapperRef = useRef(null);
  const firstInteractiveRef = useRef(null);
  const [active, setActive] = useState(false);

  useFocusTrap(wrapperRef, active, {
    initialFocus: firstInteractiveRef.current,
    onDeactivate: useCallback(() => setActive(false), [setActive]),
  });

  const disclosureProps = {
    "aria-controls": uid,
    "aria-expanded": active,
    "aria-label": `Show ${label}`,
    onClick: () => setActive((prevState) => !prevState),
  };

  const submenuProps = {
    id: uid,
    "aria-hidden": !active,
    hidden: !active,
  };

  function renderDisclosure(disclosure, disclosureProps) {
    if (isFunction(disclosure)) return disclosure(disclosureProps);
    return React.cloneElement(disclosure, disclosureProps);
  }

  return (
    <div ref={wrapperRef} className={className} aria-label={label}>
      {renderDisclosure(disclosure, disclosureProps)}
      {React.cloneElement(submenu, submenuProps)}
    </div>
  );
}

export default React.memo(BaseDropdown);
