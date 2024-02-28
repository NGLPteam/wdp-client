import {
  ButtonControl,
  ButtonControlDrawer,
  ButtonControlConfirm,
  Dropdown,
} from "components/atomic";
import * as Styled from "./ButtonControlGroup.styles";

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
}: Props) {
  return (
    <>
      <Styled.ButtonWrapper breakpoint={breakpoint}>
        {children}
      </Styled.ButtonWrapper>
      <Styled.DropdownWrapper breakpoint={breakpoint}>
        <Dropdown
          label={menuLabel}
          disclosure={
            <ButtonControl icon="ellipses" aria-label={toggleLabel}>
              {toggleText}
            </ButtonControl>
          }
          menuItems={Array.isArray(children) ? children : [children]}
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
  closeDropdown?: () => void;
  children: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[];
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
