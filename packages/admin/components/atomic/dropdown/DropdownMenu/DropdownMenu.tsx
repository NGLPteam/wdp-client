import { cloneElement, forwardRef } from "react";
import { useMenuState, MenuButton, MenuSeparator } from "reakit/Menu";
import * as Styled from "./DropdownMenu.styles";
import type { MenuHTMLProps } from "reakit/Menu";

type ButtonProps = Partial<React.ComponentProps<typeof MenuButton>>;

const DropdownMenu = forwardRef<HTMLButtonElement, Props>(
  ({ disclosure, menuItems, menuProps, isMainNav, ...props }, ref) => {
    const menu = useMenuState();
    return (
      <>
        <MenuButton ref={ref} {...menu} {...props} {...disclosure.props}>
          {(disclosureProps) => cloneElement(disclosure, disclosureProps)}
        </MenuButton>
        <Styled.MenuWrapper {...menu} {...menuProps} role="none">
          <Styled.Menu isMainNav={isMainNav}>
            {menuItems.map((item, i) => {
              if (item.type === MenuSeparator) {
                return cloneElement(item, {
                  ...menu,
                  key: item.key || i,
                  ...item.props,
                });
              }
              return (
                <Styled.Item {...menu} {...item.props} key={item.key || i}>
                  {(itemProps) => cloneElement(item, itemProps)}
                </Styled.Item>
              );
            })}
          </Styled.Menu>
        </Styled.MenuWrapper>
      </>
    );
  },
);

interface ExtendedProps {
  menuProps: MenuHTMLProps;
  menuItems: React.JSX.Element[];
  disclosure: React.JSX.Element;
  /** Set to true if this dropdown is in the main nav */
  isMainNav?: boolean;
}

type Props = ButtonProps & ExtendedProps;

export default DropdownMenu;
