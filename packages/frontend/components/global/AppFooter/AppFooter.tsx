import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import InstallationName from "components/composed/instance/InstallationName";
import { Search } from "components/forms";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import CommunityName from "components/composed/community/CommunityName";
import AnnouncementModal from "components/layout/AnnouncementModal";
import { Link as LinkStyle, NamedLink } from "components/atomic";
import { useGlobalStaticContext } from "contexts/GlobalStaticContext";
import { AppFooterFragment$key } from "@/relay/AppFooterFragment.graphql";
import * as Styled from "./AppFooter.styles";

// Note: About text and community name will come from backend data
function AppFooter({ data }: Props) {
  const staticData = useGlobalStaticContext();

  const footer = staticData?.globalConfiguration?.site?.footer;

  const app = useMaybeFragment(fragment, data);

  const communityCount = app?.communities?.pageInfo?.totalCount || 0;

  const { t } = useTranslation();

  const dialog = useDialogState({ modal: true });

  function renderRoute(href: string, label: string) {
    return (
      <Styled.NavListItem key={href} className="t-copy-sm t-copy-light">
        <NamedLink href={href}>
          <LinkStyle as="span">{startCase(t(label))}</LinkStyle>
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
          <CommunityName />
          <Styled.Installation>
            <InstallationName
              className="t-h4"
              data={app?.globalConfiguration}
            />
          </Styled.Installation>
        </Styled.CommunityNameWrapper>
        <Styled.SearchWrapper>
          <Search id="footerSearch" />
        </Styled.SearchWrapper>
        <Styled.SearchMobile>
          <Search mobile id="footerMobileSearch" />
        </Styled.SearchMobile>
        <Styled.AboutWrapper>
          <Styled.InstallationMobile>
            <InstallationName data={app?.globalConfiguration} />
          </Styled.InstallationMobile>
          {footer?.description && (
            <div className="t-copy-sm t-copy-lighter">
              {footer?.description}
            </div>
          )}
          <Styled.InstallationDesktop>
            <Styled.InstallationDesktopName>
              <InstallationName data={app?.globalConfiguration} />
            </Styled.InstallationDesktopName>
            {communityCount > 1 && <CommunityPicker data={app} />}
          </Styled.InstallationDesktop>
        </Styled.AboutWrapper>
        <Styled.NavWrapper>
          <h5 className="t-label-lg">{t("nav.explore")}</h5>
          <Styled.NavList className="t-unstyled-list">
            {renderRoute("/", "nav.home")}
            {renderPlaceholderRoute("nav.about")}
            {renderPlaceholderRoute("nav.contact")}
            {renderPlaceholderRoute("nav.privacy")}
            {renderPlaceholderRoute("nav.terms")}
            {renderPlaceholderRoute("nav.accessibility")}
            {process.env.NEXT_PUBLIC_ADMIN_URL &&
              renderRoute(process.env.NEXT_PUBLIC_ADMIN_URL, "nav.admin")}
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
  data?: AppFooterFragment$key | null;
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
      ...InstallationNameFragment
    }
    ...CommunityPickerFragment
  }
`;
