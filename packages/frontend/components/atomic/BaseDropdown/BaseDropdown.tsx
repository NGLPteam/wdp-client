import { createContext, forwardRef, useContext } from "react";
import { useIsMounted } from "@wdp/lib/hooks";
import { usePopoverState, PopoverDisclosure, Popover } from "reakit/Popover";
import styles from "./BaseDropdown.module.css";
import type { PopoverStateReturn } from "reakit/Popover";

type ButtonProps = Partial<
  Omit<React.ComponentProps<typeof PopoverDisclosure>, "onClick">
>;

const DropdownContext = createContext<PopoverStateReturn | null>(null);

const useDropdownContext = () => {
  return useContext(DropdownContext);
};

export { useDropdownContext };

/**
 * This component includes the base functionality for a dropdown.
 * It is unstyled and can be extended to create more restrictive dropdowns.
 * Using the reakit Popover gives us base a11y props and auto dropdown placement.
 */
const BaseDropdown = forwardRef<HTMLButtonElement, Props>(
  (
    {
      disclosure,
      children,
      label,
      gutter = 8,
      hideOnEsc = true,
      hideOnClickOutside = true,
      isModal = false,
      placement,
      ...props
    },
    ref,
  ) => {
    const isMounted = useIsMounted();

    const popoverState = usePopoverState({ gutter, placement, modal: isModal });

    const closePopover = popoverState.hide;

    return isMounted ? (
      <DropdownContext.Provider value={popoverState}>
        <PopoverDisclosure ref={ref} {...popoverState} {...props}>
          {disclosure}
        </PopoverDisclosure>
        <Popover
          className={styles.popover}
          hideOnEsc={hideOnEsc}
          hideOnClickOutside={hideOnClickOutside}
          {...popoverState}
          role={undefined}
          aria-label={label}
        >
          {typeof children === "function"
            ? children({ onClick: closePopover })
            : children}
        </Popover>
      </DropdownContext.Provider>
    ) : null;
  },
);

interface ExtendedProps {
  /* a11y label for the dropdown */
  label: string;
  /* dropdown children */
  children: React.ReactNode;
  /* disclosure element (usually a button) */
  disclosure: React.JSX.Element;
  /* pixel distance between the button and the dropdown */
  gutter?: number;
  /* Hide the dropdown on esc? Default is true. */
  hideOnEsc?: boolean;
  /* Hide the dropdown on click outside? Default is true. */
  hideOnClickOutside?: boolean;
  /* Is the dropdown a modal? Default is false. */
  isModal?: boolean;
  /** Popover placement (see Reakit docks) */
  placement?: PopoverStateReturn["placement"];
}

type Props = ButtonProps & ExtendedProps;

export default BaseDropdown;
