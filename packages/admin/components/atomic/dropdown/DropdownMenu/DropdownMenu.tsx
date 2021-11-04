import React from "react";
import { useMenuState, MenuButton, MenuSeparator } from "reakit/Menu";
import type { MenuHTMLProps } from "reakit/Menu";

import * as Styled from "./DropdownMenu.styles";
type ButtonProps = Partial<React.ComponentProps<typeof MenuButton>>;

const DropdownMenu = React.forwardRef<HTMLButtonElement, Props>(
  ({ disclosure, menuItems, menuProps, isMainNav, ...props }, ref) => {
    const menu = useMenuState();
    return (
      <>
        <MenuButton ref={ref} {...menu} {...props} {...disclosure.props}>
          {(disclosureProps) => React.cloneElement(disclosure, disclosureProps)}
        </MenuButton>
        <Styled.MenuWrapper {...menu} {...menuProps} role="none">
          <Styled.Menu isMainNav={isMainNav}>
            {menuItems.map((item, i) => {
              if (item.type === MenuSeparator) {
                return React.cloneElement(item, {
                  ...menu,
                  key: item.key || i,
                  ...item.props,
                });
              }
              return (
                <Styled.Item {...menu} {...item.props} key={item.key || i}>
                  {(itemProps) => React.cloneElement(item, itemProps)}
                </Styled.Item>
              );
            })}
          </Styled.Menu>
        </Styled.MenuWrapper>
      </>
    );
  }
);

interface ExtendedProps {
  menuProps: MenuHTMLProps;
  menuItems: JSX.Element[];
  disclosure: JSX.Element;
  /** Set to true if this dropdown is in the main nav */
  isMainNav?: boolean;
}

type Props = ButtonProps & ExtendedProps;

export default DropdownMenu;
