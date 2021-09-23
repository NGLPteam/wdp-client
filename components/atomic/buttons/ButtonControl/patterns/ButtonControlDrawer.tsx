import React, { forwardRef } from "react";
import { DrawerLink, ButtonControl } from "components/atomic";
type BaseProps = React.ComponentProps<typeof ButtonControl>;
type DrawerLinkProps = React.ComponentProps<typeof DrawerLink>;

/**
 * A button control that opens a drawer
 */
const ButtonControlDrawer = forwardRef(
  ({ drawer, drawerQuery, icon, children }: Props, ref) => {
    return (
      <DrawerLink drawer={drawer} drawerQuery={drawerQuery} passHref>
        <ButtonControl as="a" icon={icon} ref={ref}>
          {children}
        </ButtonControl>
      </DrawerLink>
    );
  }
);

type Props = BaseProps & Pick<DrawerLinkProps, "drawer" | "drawerQuery">;

export default ButtonControlDrawer;
