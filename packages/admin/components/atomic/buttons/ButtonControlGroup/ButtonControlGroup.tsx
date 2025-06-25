import {
  ButtonControl,
  ButtonControlDrawer,
  ButtonControlConfirm,
  Dropdown,
} from "components/atomic";
import * as Styled from "./ButtonControlGroup.styles";
import type { PropsWithChildren } from "react";

type ButtonProps =
  | React.ComponentProps<typeof ButtonControl>
  | React.ComponentProps<typeof ButtonControlDrawer>
  | React.ComponentProps<typeof ButtonControlConfirm>;

function ButtonControlGroup({
  breakpoint = 40,
  children,
  menuLabel,
  toggleText,
  toggleLabel,
  grid,
}: Props & PropsWithChildren) {
  return (
    <>
      <Styled.ButtonWrapper $breakpoint={breakpoint} $grid={grid}>
        {children}
      </Styled.ButtonWrapper>
      <Styled.DropdownWrapper $breakpoint={breakpoint}>
        <Dropdown
          label={menuLabel}
          disclosure={
            <ButtonControl icon="ellipses" aria-label={toggleLabel}>
              {toggleText}
            </ButtonControl>
          }
          menuItems={Array.isArray(children) ? children : [children]}
          alignRight
        />
      </Styled.DropdownWrapper>
    </>
  );
}

interface BaseProps {
  buttons?: ButtonProps[];
  breakpoint?: string | number;
  menuLabel: string;
  toggleLabel?: string;
  toggleText?: string;
  $closeDropdown?: () => void;
  grid?: boolean;
}

interface PropsWithLabel extends BaseProps {
  toggleLabel: string;
  toggleText?: never;
}

interface PropsWithText extends BaseProps {
  toggleLabel?: never;
  toggleText: string;
}

type Props = PropsWithLabel | PropsWithText;

export default ButtonControlGroup;
