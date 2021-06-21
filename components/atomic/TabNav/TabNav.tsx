import React from "react";
import * as Styled from "./TabNav.styles";

const TabNav = ({ children }: Props) => {
  return (
    <Styled.Nav>
      <Styled.List className="l-flex">
        {children &&
          children.map((child, i) => (
            <Styled.Item key={i}>{child}</Styled.Item>
          ))}
      </Styled.List>
    </Styled.Nav>
  );
};
interface Props {
  children: React.ReactNode[];
}

TabNav.Tab = Styled.Tab;

export default TabNav;
