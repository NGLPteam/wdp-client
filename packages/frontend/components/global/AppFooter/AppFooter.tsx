import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import classNames from "classnames";
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
import { CommunityPickerCommunityNameFragment$key } from "@/relay/CommunityPickerCommunityNameFragment.graphql";
import styles from "./AppFooter.module.css";

interface Props {
  data?: AppFooterFragment$key | null;
  communityData?: CommunityPickerCommunityNameFragment$key | null;
}

export default function AppFooter({ data, communityData }: Props) {
  const staticData = useGlobalStaticContext();

  const footer = staticData?.globalConfiguration?.site?.footer;

  const app = useMaybeFragment(fragment, data);

  const communityCount = app?.communities?.pageInfo?.totalCount || 0;

  const { t } = useTranslation();

  const dialog = useDialogState({ modal: true });

  function renderRoute(href: string, label: string) {
    return (
      <li
        key={href}
        className={classNames("t-copy-sm t-copy-light", styles.navItem)}
      >
        <NamedLink href={href}>{startCase(t(label))}</NamedLink>
      </li>
    );
  }

  function renderPlaceholderRoute(label: string) {
    return (
      <li
        key={label}
        className={classNames("t-copy-sm t-copy-light", styles.navItem)}
      >
        <DialogDisclosure {...dialog}>
          <LinkStyle as="span">{t(label)}</LinkStyle>
        </DialogDisclosure>
      </li>
    );
  }

  return (
    <footer className={classNames("a-bg-custom20", styles.footer)}>
      <div className={classNames("l-container-wide", styles.inner)}>
        <div className={styles.communityName}>
          <CommunityName />
          <h4 className={styles.installation}>
            <InstallationName
              className="t-h4"
              data={app?.globalConfiguration}
            />
          </h4>
        </div>
        <div className={styles.search}>
          <Search id="footerSearch" />
        </div>
        <div className={styles.searchMobile}>
          <Search mobile id="footerMobileSearch" />
        </div>
        <div className={styles.about}>
          <div className={styles.installationMobile}>
            <InstallationName data={app?.globalConfiguration} />
          </div>
          {footer?.description && (
            <div className="t-copy-sm t-copy-lighter">
              {footer?.description}
            </div>
          )}
          <div className={styles.installationDesktop}>
            <div className={styles["installationDesktop__name"]}>
              <InstallationName data={app?.globalConfiguration} />
            </div>
            {communityCount > 1 && (
              <CommunityPicker data={app} activeData={communityData} />
            )}
          </div>
        </div>
        <nav className={styles.nav}>
          <h5 className="t-label-lg">{t("nav.explore")}</h5>
          <ul className={classNames("t-unstyled-list", styles.navList)}>
            {renderRoute("/", "nav.home")}
            {renderPlaceholderRoute("nav.about")}
            {renderPlaceholderRoute("nav.contact")}
            {renderPlaceholderRoute("nav.privacy")}
            {renderPlaceholderRoute("nav.terms")}
            {renderPlaceholderRoute("nav.accessibility")}
            {process.env.NEXT_PUBLIC_ADMIN_URL &&
              renderRoute(process.env.NEXT_PUBLIC_ADMIN_URL, "nav.admin")}
          </ul>
        </nav>
        {footer?.copyrightStatement && (
          <p className={classNames("t-copy-sm t-copy-light", styles.copyright)}>
            {`© ${footer?.copyrightStatement}`}
          </p>
        )}
      </div>
      <AnnouncementModal dialog={dialog}>
        <p>{t("app.placeholder_page_text")}</p>
      </AnnouncementModal>
    </footer>
  );
}

const fragment = graphql`
  fragment AppFooterFragment on Query {
    communities(order: POSITION_ASCENDING) {
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
