import React from "react";
import * as Styled from "./MainFooter.styles";

function MainFooterNav({ header, children }: Props) {
  return (
    <>
      <Styled.Header>{header}</Styled.Header>
      <Styled.List className="t-rte">
        {children &&
          children.map((child, i) => (
            <Styled.ListItem key={i}>{child}</Styled.ListItem>
          ))}
      </Styled.List>
    </>
  );
}

interface Props {
  header: string;
  children: React.ReactNode[];
}

export default MainFooterNav;
