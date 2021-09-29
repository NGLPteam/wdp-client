import React, { useState, useRef, useCallback } from "react";
import { useUID } from "react-uid";
import { useFocusTrap } from "@castiron/hooks/";
import isFunction from "lodash/isFunction";

/**
 * A dropdown for navigation submenus.
 * Adds appropriate aria labels and open/close functionality.
 */
function BaseDropdown({ className, disclosure, submenu, label }: Props) {
  const uid = useUID();
  const wrapperRef = useRef(null);
  const [active, setActive] = useState(false);

  useFocusTrap(wrapperRef, active, {
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

  const onOpenModal = {
    onOpenModal: useCallback(
      (e) => {
        e.stopPropagation();
        setActive(false);
      },
      [setActive]
    ),
  };

  const submenuItems = submenu.props.children;
  const submenuItemsWithModal = submenuItems.map((item: JSX.Element) => {
    const buttonControl = item.props.children;
    const buttonControlWithModal = React.cloneElement(
      buttonControl,
      onOpenModal
    );
    return React.cloneElement(item, {}, buttonControlWithModal);
  });

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
      {React.cloneElement(submenu, submenuProps, submenuItemsWithModal)}
    </div>
  );
}

interface Props {
  className?: string;
  disclosure: JSX.Element | ((props: BaseDisclosureProps) => void);
  submenu: JSX.Element;
  label: string;
}
export interface BaseDisclosureProps {
  "aria-controls": string;
  "aria-expanded": boolean;
  "aria-label": string;
  onClick: () => void;
}

export default React.memo(BaseDropdown);
