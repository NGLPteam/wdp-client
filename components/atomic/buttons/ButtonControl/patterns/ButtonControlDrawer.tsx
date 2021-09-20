import React, { forwardRef } from "react";
import { DrawerLink, ButtonControl } from "components/atomic";
type BaseProps = React.ComponentProps<typeof ButtonControl>;
type DrawerLinkProps = React.ComponentProps<typeof DrawerLink>;

/**
 * A button control that opens a drawer
 */
const ButtonControlDrawer = forwardRef(
  ({ drawer, icon, children }: Props, ref) => {
    return (
      <DrawerLink drawer={drawer} passHref>
        <ButtonControl as="a" icon={icon} ref={ref}>
          {children}
        </ButtonControl>
      </DrawerLink>
    );
  }
);

interface Props extends BaseProps {
  drawer: DrawerLinkProps["drawer"];
}

export default ButtonControlDrawer;
