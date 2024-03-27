import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useParams } from "next/navigation";
import { RouteHelper } from "routes";
import { useGlobalContext } from "contexts";
import InstallationName from "components/composed/instance/InstallationName";
import { Search } from "components/forms";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import CommunityName from "components/composed/community/CommunityName";
import AnnouncementModal from "components/layout/AnnouncementModal";
import { Link as LinkStyle, NamedLink } from "components/atomic";
import { useGlobalStaticContext } from "contexts/GlobalStaticContext";
import { AppFooterFragment$key } from "@/relay/AppFooterFragment.graphql";
import { AppFooterCommunityFragment$key } from "@/relay/AppFooterCommunityFragment.graphql";
import * as Styled from "./AppFooter.styles";

// Note: About text and community name will come from backend data
function AppFooter({ communityData }: Props) {
  const staticData = useGlobalStaticContext();

  const footer = staticData?.globalConfiguration?.site?.footer;

  const globalData = useGlobalContext();

  const app = useMaybeFragment<AppFooterFragment$key>(fragment, globalData);

  const community = useMaybeFragment(communityFragment, communityData);

  const { slug } = useParams();

  const searchProps = community
    ? {
        pathname: `/community/${slug}/search`,
        placeholder: `Search ${community.title}`,
      }
    : null;

  const communityCount = app?.communities?.pageInfo?.totalCount || 0;

  const { t } = useTranslation();

  const dialog = useDialogState({ modal: true });

  function renderRoute(route: string, label?: string) {
    const routeObj = RouteHelper.findRouteByName(route);
    const routeLabel = label || routeObj?.label || "";

    return (
      <Styled.NavListItem key={route} className="t-copy-sm t-copy-light">
        <NamedLink route={route}>
          <LinkStyle as="span">{startCase(t(routeLabel))}</LinkStyle>
        </NamedLink>
      </Styled.NavListItem>
    );
  }

  function renderPlaceholderRoute(label: string) {
    return (
      <Styled.NavListItem key={label} className="t-copy-sm t-copy-light">
        <DialogDisclosure {...dialog}>
          <LinkStyle as="span">{t(label)}</LinkStyle>
        </DialogDisclosure>
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
            <h4>
              <InstallationName className="t-h4" />
            </h4>
          )}
        </Styled.CommunityNameWrapper>
        <Styled.SearchWrapper>
          <Search id="footerSearch" {...searchProps} />
        </Styled.SearchWrapper>
        <Styled.SearchMobile>
          <Search mobile id="footerMobileSearch" {...searchProps} />
        </Styled.SearchMobile>
        <Styled.AboutWrapper>
          {community && (
            <Styled.InstallationMobile>
              <InstallationName />
            </Styled.InstallationMobile>
          )}
          {footer?.description && (
            <div className="t-copy-sm t-copy-lighter">
              {footer?.description}
            </div>
          )}
          <Styled.InstallationDesktop>
            {community && (
              <Styled.InstallationDesktopName>
                <InstallationName />
              </Styled.InstallationDesktopName>
            )}
            {communityCount > 1 && <CommunityPicker active={community} />}
          </Styled.InstallationDesktop>
        </Styled.AboutWrapper>
        <Styled.NavWrapper>
          <h5 className="t-label-lg">{t("nav.explore")}</h5>
          <Styled.NavList className="t-unstyled-list">
            {renderRoute("home")}
            {renderPlaceholderRoute("nav.about")}
            {communityCount > 1 && renderRoute("communities")}
            {renderPlaceholderRoute("nav.contact")}
            {renderPlaceholderRoute("nav.privacy")}
            {renderPlaceholderRoute("nav.terms")}
            {renderPlaceholderRoute("nav.accessibility")}
            {renderRoute("admin")}
          </Styled.NavList>
        </Styled.NavWrapper>
        {footer?.copyrightStatement && (
          <Styled.CopyrightText className="t-copy-sm t-copy-light">
            {`© ${footer?.copyrightStatement}`}
          </Styled.CopyrightText>
        )}
      </Styled.FooterInner>
      <AnnouncementModal dialog={dialog}>
        <p>{t("app.placeholder_page_text")}</p>
      </AnnouncementModal>
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
  }
`;

const communityFragment = graphql`
  fragment AppFooterCommunityFragment on Community {
    slug
    title
    ...CommunityPickerActiveFragment
    ...CommunityNameFragment
  }
`;
