import React, { ReactNode } from "react";
import * as Styled from "./ContentSidebar.styles";
import { SidebarNav } from "components/atomic";

type SidebarNavProps = React.ComponentProps<typeof SidebarNav>;

/**
 * Wrapper for page title, breadcrumbs, and child tabs
 */
const ContentSidebar = ({ sidebarLinks, children }: Props) => {
  return (
    <Styled.Wrapper className="l-grid">
      {sidebarLinks && (
        <Styled.SidebarWrapper className="l-grid__item--3">
          <SidebarNav links={sidebarLinks} />
        </Styled.SidebarWrapper>
      )}
      <div className="l-grid__item--9">{children}</div>
    </Styled.Wrapper>
  );
};

interface Props {
  /** Sidebar links */
  sidebarLinks?: SidebarNavProps["links"];
  /** Page children */
  children?: ReactNode;
}

export default ContentSidebar;
