import React, { ReactNode } from "react";
import * as Styled from "./SidebarNav.styles";

const SidebarNav = ({ children, className }: Props) => {
  return (
    <Styled.Nav className={className}>
      <Styled.List>
        {children &&
          children.map((child, i) => (
            <Styled.ListItem key={i}>{child}</Styled.ListItem>
          ))}
      </Styled.List>
    </Styled.Nav>
  );
};

interface Props {
  children: ReactNode[];
  className?: string;
}

SidebarNav.Link = Styled.Link;
SidebarNav.Link.displayName = "SidebarNav.Link";

export default SidebarNav;
