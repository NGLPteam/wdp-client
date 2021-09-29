import React from "react";
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
  buttons,
  breakpoint = 40,
  menuLabel,
  toggleLabel,
  toggleText,
}: Props) {
  function renderButton(props: ButtonProps, i: number) {
    const { children, ...buttonProps } = props;

    return "drawer" in props ? (
      <ButtonControlDrawer
        key={i}
        drawer={props.drawer}
        drawerQuery={props.drawerQuery}
        {...buttonProps}
      >
        {children}
      </ButtonControlDrawer>
    ) : "modalLabel" in props ? (
      <ButtonControlConfirm
        key={i}
        modalBody={props.modalBody}
        modalLabel={props.modalLabel}
        {...buttonProps}
      >
        {children}
      </ButtonControlConfirm>
    ) : (
      <ButtonControl key={i} {...buttonProps}>
        {children}
      </ButtonControl>
    );
  }

  function renderDropdown(buttons: ButtonProps[]) {
    return (
      <Dropdown
        label={menuLabel}
        disclosure={
          <ButtonControl icon="ellipses" aria-label={toggleLabel}>
            {toggleText}
          </ButtonControl>
        }
        menuItems={buttons.map(renderButton)}
      />
    );
  }

  return (
    <>
      <Styled.ButtonWrapper breakpoint={breakpoint}>
        {buttons.map(renderButton)}
      </Styled.ButtonWrapper>
      <Styled.DropdownWrapper breakpoint={breakpoint}>
        {renderDropdown(buttons)}
      </Styled.DropdownWrapper>
    </>
  );
}

interface BaseProps {
  buttons: ButtonProps[];
  breakpoint?: string | number;
  menuLabel: string;
  toggleLabel?: string;
  toggleText?: string;
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
