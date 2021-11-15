import React from "react";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import Link from "next/link";
import { useRouterContext } from "@wdp/lib/routes";
import appData from "../../../fixtures/app.data";
import CommunityName from "../../atomic/CommunityName";
import AppFooterSearch from "../AppFooterSearch";
import * as Styled from "./AppFooter.styles";

// Note: About text and community name will come from backend data
function AppFooter() {
  const { t } = useTranslation();
  const today = new Date();
  const { footerData } = appData;
  const { findRouteByName } = useRouterContext();

  function renderRoute(route: string, label?: string) {
    const routeObj = findRouteByName(route);
    const routeLabel = label || routeObj?.label;

    return routeObj && routeLabel ? (
      <Styled.NavListItem key={route}>
        <Link href={routeObj.path} passHref>
          <a className="t-copy-sm t-copy-light">{startCase(t(routeLabel))}</a>
        </Link>
      </Styled.NavListItem>
    ) : null;
  }

  return (
    <Styled.FooterWrapper className="a-bg-custom10">
      <Styled.FooterInner className="l-container-wide l-grid">
        <Styled.CommunityNameWrapper>
          <CommunityName />
        </Styled.CommunityNameWrapper>
        <Styled.SearchWrapper>
          <AppFooterSearch />
        </Styled.SearchWrapper>
        <Styled.AboutText className="t-copy-sm t-copy-lighter">
          A brief overview of this WDP instance. Arcu nisl ullamcorper vulputate
          sed urna dolor. Tristique morbi integer in morbi morbi scelerisque
          tortor. Eget orci erat vitae elit vel luctus. Sit egestas adipiscing
          placerat accumsan pharetra volutpat viverra sit proin.{" "}
        </Styled.AboutText>
        <Styled.NavWrapper>
          {footerData.nav.map(({ label, children }) => (
            <div key={label}>
              <h5 className="t-label-lg">{t(label)}</h5>
              <ul className="t-unstyled-list">
                {children.map(({ route, label }) => renderRoute(route, label))}
              </ul>
            </div>
          ))}
        </Styled.NavWrapper>
        <Styled.CopyrightText className="t-copy-sm t-copy-light">
          {t("app.copyright", { year: today.getFullYear() })}
        </Styled.CopyrightText>
      </Styled.FooterInner>
    </Styled.FooterWrapper>
  );
}

export default AppFooter;
