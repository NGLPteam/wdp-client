import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./Footer.styles";
import appData from "fixtures/app.data";
import { LogoPlaceholder } from "components/global";
import { renderNavLink } from "helpers";

function Footer() {
  const { footerData } = appData;
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <Styled.Nav className="l-grid">
        <div className="l-grid__item l-grid__item--4">
          <LogoPlaceholder>{t("app.powered_by")}</LogoPlaceholder>
        </div>
        {footerData.navigation.map((nav, i) => (
          <div className="l-grid__item l-grid__item--2" key={i}>
            <Styled.Header>{t(nav.header)}</Styled.Header>
            <Styled.List>
              {nav.children &&
                nav.children.map((child, i) =>
                  renderNavLink(child, i, Styled.ListItem)
                )}
            </Styled.List>
          </div>
        ))}
        {footerData.about && (
          <div className="l-grid__item l-grid__item--4">
            <Styled.Header>{t(footerData.about.header)}</Styled.Header>
            <span className="t-rte">{t(footerData.about.body)}</span>
          </div>
        )}
      </Styled.Nav>
      {footerData.copyright && (
        <Styled.Copyright className="l-grid">
          <div className="l-grid__item l-grid__item--4" role="presentation" />
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
