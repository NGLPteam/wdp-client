import React, { forwardRef } from "react";
import Link from "next/link";
import { useDrawerHelper } from "hooks";
import type { Drawers } from "hooks/useDrawerHelper";
type LinkProps = React.ComponentProps<typeof Link>;

/**
 * Opens a Drawer from query parameters
 */
const DrawerLink = forwardRef(
  (
    { children, drawer, drawerQuery, query, passHref, ...props }: Props,
    ref
  ) => {
    const drawerHelper = useDrawerHelper();

    return (
      <Link href={drawerHelper.href(drawer)} passHref={passHref} {...props}>
        {React.isValidElement(children)
          ? React.cloneElement(children, { ref, ...props })
          : children}
      </Link>
    );
  }
);
export interface Props extends Omit<LinkProps, "href"> {
  /* Drawer to open */
  drawer: Drawers;
  /* parameters that will be passed to the drawer component */
  drawerQuery?: Record<string, string | number>;
  /* Extra query parameters */
  query?: Record<string, string | number>;
  /* Pass href to child component */
  passHref?: boolean;
}

export default DrawerLink;
