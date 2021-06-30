import React from "react";
import {
  useMenuState,
  MenuButton,
  MenuSeparator,
  MenuHTMLProps,
} from "reakit/Menu";
import * as Styled from "./DropdownMenu.styles";
type ButtonProps = Partial<React.ComponentProps<typeof MenuButton>>;

const DropdownMenu = React.forwardRef<HTMLButtonElement, Props>(
  ({ disclosure, menuItems, menuProps, ...props }, ref) => {
    const menu = useMenuState();
    return (
      <>
        <MenuButton ref={ref} {...menu} {...props} {...disclosure.props}>
          {(disclosureProps) => React.cloneElement(disclosure, disclosureProps)}
        </MenuButton>
        <Styled.Menu {...menu} {...menuProps}>
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
      </>
    );
  }
);

interface ExtendedProps {
  menuProps: MenuHTMLProps;
  menuItems: JSX.Element[];
  disclosure: JSX.Element;
}

type Props = ButtonProps & ExtendedProps;

export default DropdownMenu;
