import React, { ReactNode } from "react";
import * as Styled from "./SidebarNav.styles";

const SidebarNav = ({ children }: Props) => {
  return (
    <Styled.Nav>
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
}

SidebarNav.Link = Styled.Link;

export default SidebarNav;
