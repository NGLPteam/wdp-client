import React from "react";
import * as Styled from "./MainFooter.styles";
import MainFooterNav from "./MainFooterNav";
import { MixedLink } from "components/atomic";
import { LogoPlaceholder } from "components/global";

const MainFooter = ({ children, copyright, about }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Nav className="l-grid">
        <div className="l-grid__item l-grid__item--4">
          <MixedLink href="/" passHref>
            <LogoPlaceholder>Powered by NGLP–WDP</LogoPlaceholder>
          </MixedLink>
        </div>
        {children &&
          children.map((child, i) => (
            <div className="l-grid__item l-grid__item--2" key={i}>
              {child}
            </div>
          ))}
        {about && (
          <div className="l-grid__item l-grid__item--4">
            <Styled.Header>About</Styled.Header>
            <span className="t-rte">{about}</span>
          </div>
        )}
      </Styled.Nav>
      {copyright && (
        <Styled.Copyright className="l-grid">
          <div
            className="l-grid__item l-grid__item--4"
            role="presentation"
          ></div>
          <p className="l-grid__item l-grid__item--8">
            {"© "}
            {copyright}
          </p>
        </Styled.Copyright>
      )}
    </Styled.Wrapper>
  );
};

interface Props {
  copyright?: string;
  about?: string;
  children: [React.ReactNode, React.ReactNode];
}

MainFooter.Nav = MainFooterNav;

export default MainFooter;
