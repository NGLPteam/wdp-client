import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import Link from "next/link";
import { useRouterContext } from "@wdp/lib/routes";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import appData from "../../../fixtures/app.data";
import InstallationName from "../../composed/instance/InstallationName";
import { Search } from "components/forms";
import * as Styled from "./AppFooter.styles";
import { AppFooterFragment$key } from "@/relay/AppFooterFragment.graphql";

// Note: About text and community name will come from backend data
function AppFooter({ data, nameComponent }: Props) {
  const { t } = useTranslation();
  const today = new Date();
  const { footerData } = appData;
  const { findRouteByName } = useRouterContext();
  const footerApiData = useMaybeFragment(fragment, data);

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
      <Styled.FooterInner className="l-container-wide">
        <Styled.CommunityNameWrapper>
          {nameComponent}
        </Styled.CommunityNameWrapper>
        <Styled.SearchWrapper>
          <Search />
        </Styled.SearchWrapper>
        <Styled.AboutWrapper>
          <p className="t-copy-sm t-copy-lighter">
            A brief overview of this WDP instance. Arcu nisl ullamcorper
            vulputate sed urna dolor. Tristique morbi integer in morbi morbi
            scelerisque tortor. Eget orci erat vitae elit vel luctus. Sit
            egestas adipiscing placerat accumsan pharetra volutpat viverra sit
            proin.
          </p>
          {footerApiData && <InstallationName data={footerApiData} />}
        </Styled.AboutWrapper>
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

interface Props {
  data?: AppFooterFragment$key | null;
  nameComponent?: React.ReactNode;
}

export default AppFooter;

const fragment = graphql`
  fragment AppFooterFragment on Query {
    ...InstallationNameFragment
  }
`;
