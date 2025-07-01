import { useContext } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import classNames from "classnames";
import InstallationName from "components/composed/instance/InstallationName";
import { Search } from "components/forms";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import CommunityName from "components/composed/community/CommunityName";
import { NamedLink, Markdown } from "components/atomic";
import { useGlobalStaticContext } from "contexts/GlobalStaticContext";
import { CommunityContext } from "@/contexts/CommunityContext";
import { AppFooterFragment$key } from "@/relay/AppFooterFragment.graphql";
import { CommunityPickerCommunityNameFragment$key } from "@/relay/CommunityPickerCommunityNameFragment.graphql";
import styles from "./AppFooter.module.css";

interface Props {
  data?: AppFooterFragment$key | null;
  communityData?: CommunityPickerCommunityNameFragment$key | null;
}

export default function AppFooter({ data, communityData }: Props) {
  const staticData = useGlobalStaticContext();
  const community = useContext(CommunityContext);

  const footer = staticData?.globalConfiguration?.site?.footer;

  const app = useFragment(fragment, data);

  const communityCount = app?.communities?.pageInfo?.totalCount || 0;

  const { t } = useTranslation();

  function renderRoute(href: string, label: string) {
    return (
      <li
        key={href}
        className={classNames("t-copy-sm t-copy-light", styles.navItem)}
      >
        <NamedLink href={href}>
          <span>{startCase(t(label))}</span>
        </NamedLink>
      </li>
    );
  }

  return (
    <footer className={classNames("a-bg-custom20", styles.footer)}>
      <div className={classNames("l-container-wide", styles.inner)}>
        <div className={styles.communityName}>
          {community ? (
            <CommunityName />
          ) : (
            <h4>
              <InstallationName
                className="t-h4"
                data={app?.globalConfiguration}
              />
            </h4>
          )}
        </div>
        <div className={styles.search}>
          <Search id="footerSearch" />
        </div>
        <div className={styles.searchMobile}>
          <Search mobile id="footerMobileSearch" />
        </div>
        <div className={styles.about}>
          {!!community && (
            <div className={styles.installationMobile}>
              <InstallationName data={app?.globalConfiguration} />
            </div>
          )}
          {footer?.description && (
            <Markdown.Base className="t-copy-sm t-copy-lighter">
              {footer?.description}
            </Markdown.Base>
          )}
          <div className={styles.installationDesktop}>
            {!!community && (
              <div className={styles["installationDesktop__name"]}>
                <InstallationName data={app?.globalConfiguration} />
              </div>
            )}
            {communityCount > 1 && (
              <CommunityPicker data={app} activeData={communityData} />
            )}
          </div>
        </div>
        <nav className={styles.nav}>
          <h5 className="t-label-lg">{t("nav.explore")}</h5>
          <ul className={classNames("t-unstyled-list", styles.navList)}>
            {renderRoute("/", "nav.home")}
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
