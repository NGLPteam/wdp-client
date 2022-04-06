import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import appData from "../../../fixtures/app.data";
import * as Styled from "./AppFooter.styles";
import InstallationName from "components/composed/instance/InstallationName";
import { Search } from "components/forms";
import { RouteHelper } from "routes";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import CommunityName from "components/composed/community/CommunityName";
import { Link as LinkStyle, NamedLink } from "components/atomic";
import { AppFooterCommunityFragment$key } from "@/relay/AppFooterCommunityFragment.graphql";
import { useGlobalContext } from "contexts";
import { AppFooterFragment$key } from "@/relay/AppFooterFragment.graphql";

// Note: About text and community name will come from backend data
function AppFooter({ communityData }: Props) {
  const globalData = useGlobalContext();

  const app = useMaybeFragment<AppFooterFragment$key>(fragment, globalData);

  const community = useMaybeFragment(communityFragment, communityData);

  const { t } = useTranslation();

  const { footerData } = appData;

  function renderRoute(route: string, label?: string) {
    const routeObj = RouteHelper.findRouteByName(route);
    const routeLabel = label || routeObj?.label || "";

    return (
      <Styled.NavListItem key={route} className="t-copy-sm t-copy-light">
        <NamedLink route={route} passHref>
          <LinkStyle>{startCase(t(routeLabel))}</LinkStyle>
        </NamedLink>
      </Styled.NavListItem>
    );
  }

  return (
    <Styled.FooterWrapper className={`a-bg-custom20`}>
      <Styled.FooterInner className="l-container-wide">
        <Styled.CommunityNameWrapper>
          {community ? (
            <CommunityName data={community} />
          ) : (
            <h4>{app?.globalConfiguration.site.installationName}</h4>
          )}
        </Styled.CommunityNameWrapper>
        <Styled.SearchWrapper>
          <Search id="footerSearch" />
        </Styled.SearchWrapper>
        <Styled.SearchMobile>
          <Search mobile id="footerMobileSearch" />
        </Styled.SearchMobile>
        <Styled.AboutWrapper>
          {community && (
            <Styled.InstallationMobile>
              <InstallationName />
            </Styled.InstallationMobile>
          )}
          {app?.globalConfiguration.site.footer.description && (
            <div className="t-copy-sm t-copy-lighter">
              {app?.globalConfiguration.site.footer.description}
            </div>
          )}
          <Styled.InstallationDesktop>
            {community && (
              <Styled.InstallationDesktopName as={InstallationName} />
            )}
            {app?.communities?.pageInfo?.totalCount &&
              app.communities.pageInfo.totalCount > 1 && (
                <CommunityPicker active={community} />
              )}
          </Styled.InstallationDesktop>
        </Styled.AboutWrapper>
        {footerData.nav && (
          <Styled.NavWrapper>
            <h5 className="t-label-lg">{t(footerData.nav.label)}</h5>
            <Styled.NavList
              className="t-unstyled-list"
              $columns={footerData.nav.children.length}
            >
              {footerData.nav.children.map(({ route }) => renderRoute(route))}
            </Styled.NavList>
          </Styled.NavWrapper>
        )}
        {app?.globalConfiguration.site.footer.copyrightStatement && (
          <Styled.CopyrightText className="t-copy-sm t-copy-light">
            {`© ${app.globalConfiguration.site.footer.copyrightStatement}`}
          </Styled.CopyrightText>
        )}
      </Styled.FooterInner>
    </Styled.FooterWrapper>
  );
}

interface Props {
  communityData?: AppFooterCommunityFragment$key | null;
}

export default AppFooter;

const fragment = graphql`
  fragment AppFooterFragment on Query {
    communities {
      pageInfo {
        totalCount
      }
    }
    globalConfiguration {
      site {
        installationName
        footer {
          copyrightStatement
          description
        }
      }
    }
  }
`;

const communityFragment = graphql`
  fragment AppFooterCommunityFragment on Community {
    ...CommunityPickerActiveFragment
    ...CommunityNameFragment
  }
`;
