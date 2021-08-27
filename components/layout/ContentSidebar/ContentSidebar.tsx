import React, { ReactNode } from "react";
import { SidebarNav } from "components/atomic";
type SidebarNavProps = React.ComponentProps<typeof SidebarNav>;

/**
 * Wrapper for page title, breadcrumbs, and child tabs
 */
const ContentSidebar = ({ sidebarLinks, children }: Props) => {
  return (
    <div className="l-grid">
      {sidebarLinks && (
        <SidebarNav className="l-grid__item--3" links={sidebarLinks} />
      )}
      <div className="l-grid__item--9">{children}</div>
    </div>
  );
};

interface Props {
  /** Sidebar links */
  sidebarLinks?: SidebarNavProps["links"];
  /** Page children */
  children?: ReactNode;
}

export default ContentSidebar;
