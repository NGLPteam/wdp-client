import React from "react";
import { DrawerLink, ButtonControl } from "components/atomic";
type BaseProps = React.ComponentProps<typeof ButtonControl>;
type DrawerLinkProps = React.ComponentProps<typeof DrawerLink>;

/**
 * A button control that opens a drawer
 */
const ButtonControlDrawer = ({ drawer, icon, children }: Props) => {
  return (
    <DrawerLink drawer={drawer} passHref>
      <ButtonControl as="a" icon={icon}>
        {children}
      </ButtonControl>
    </DrawerLink>
  );
};

type Props = BaseProps & Pick<DrawerLinkProps, "drawer">;

export default ButtonControlDrawer;
