import React, { forwardRef } from "react";
import Link from "next/link";
type LinkProps = React.ComponentProps<typeof Link>;

/**
 * Opens a Drawer from query parameters
 */
const DrawerLink = forwardRef(
  ({ children, drawer, query, ...props }: Props, ref) => {
    const pathname = window.location.pathname;

    /* Add Drawer query params */
    const drawerQuery = {
      drawer,
      // More props can be added here
    };

    return (
      <Link href={{ pathname, query: { ...drawerQuery, ...query } }} {...props}>
        {React.isValidElement(children)
          ? React.cloneElement(children, { ref, ...props })
          : children}
      </Link>
    );
  }
);
export interface Props extends Omit<LinkProps, "href"> {
  children: React.ReactNode;
  /** Drawer to open */
  drawer: string;
  /** Extra query parameters */
  query?: Record<string, string | number>;
}

export default DrawerLink;
