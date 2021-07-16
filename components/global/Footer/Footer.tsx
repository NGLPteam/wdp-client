import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import appData from "fixtures/app.data";
import { NamedLink } from "components/atomic";
import { LogoPlaceholder } from "components/global";
import { Authorize } from "components/auth";
import * as Styled from "./Footer.styles";

function Footer() {
  const { footerData } = appData;
  const { t } = useTranslation("common");

  const renderLink = ({ actions, label, route, href }, i) => {
    const wrappedLink = (
      <Styled.ListItem key={i}>
        <NamedLink route={route || href} passHref>
          <a className="t-capitalize">{t(label)}</a>
        </NamedLink>
      </Styled.ListItem>
    );

    if (actions) {
      return (
        <Authorize actions={actions} key={i}>
          {wrappedLink}
        </Authorize>
      );
    }

    return wrappedLink;
  };

  return (
    <Styled.Wrapper>
      <Styled.Nav className="l-grid">
        <div className="l-grid__item l-grid__item--4">
          <Link href="/" passHref>
            <LogoPlaceholder>Powered by NGLP–WDP</LogoPlaceholder>
          </Link>
        </div>
        {footerData.navigation.map((nav, i) => (
          <div className="l-grid__item l-grid__item--2" key={i}>
            <Styled.Header>{t(nav.header)}</Styled.Header>
            <Styled.List>
              {nav.children &&
                nav.children.map((child, i) => renderLink(child, i))}
            </Styled.List>
          </div>
        ))}
        {footerData.about && (
          <div className="l-grid__item l-grid__item--4">
            <Styled.Header>About</Styled.Header>
            <span className="t-rte">{t(footerData.about)}</span>
          </div>
        )}
      </Styled.Nav>
      {footerData.copyright && (
        <Styled.Copyright className="l-grid">
          <div
            className="l-grid__item l-grid__item--4"
            role="presentation"
          ></div>
          <p className="l-grid__item l-grid__item--8">
            {"© "}
            {t(footerData.copyright)}
          </p>
        </Styled.Copyright>
      )}
    </Styled.Wrapper>
  );
}

export default Footer;
