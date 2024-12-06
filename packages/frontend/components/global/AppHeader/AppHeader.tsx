import { graphql } from "react-relay";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { SearchButton } from "components/atomic";
import MobileMenuToggle from "components/layout/MobileMenuToggle";
import InstallationName from "components/composed/instance/InstallationName";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import AccountDropdown from "components/composed/viewer/AccountDropdown";
import CommunityNavList from "components/composed/community/CommunityNavList";
import CommunityName from "components/composed/community/CommunityName";
import Search from "components/forms/Search";
import BaseDrawer from "components/layout/BaseDrawer";
import { AppHeaderFragment$key } from "@/relay/AppHeaderFragment.graphql";
import { SearchButtonFragment$key } from "@/relay/SearchButtonFragment.graphql";
import styles from "./AppHeader.module.css";

interface Props {
  data?: AppHeaderFragment$key | null;
  searchData?: SearchButtonFragment$key | null;
}

export default function AppHeader({ data, searchData }: Props) {
  const appData = useMaybeFragment(fragment, data);

  const pathRegEx = /^\/communities\/[A-Za-z0-9]{30,32}/;

  const pathname = usePathname();

  const isCommunityRoot = pathRegEx.test(pathname);
  const hideSearch = pathname === "/" || pathname === "/search";

  const { t } = useTranslation();

  const dialog = useDialogState({ animated: true });

  const totalCommunities = appData?.communities?.pageInfo.totalCount || 0;

  return (
    <>
      <header className={styles.header}>
        <div className={classNames("l-container-wide", styles.inner)}>
          <div className={styles.left}>
            {(!isCommunityRoot ||
              (isCommunityRoot && totalCommunities > 1)) && (
              <>
                <span
                  className={classNames(styles.installatioName, {
                    [styles["installatioName--with-text"]]:
                      appData?.globalConfiguration?.site?.logoMode ===
                      "WITH_TEXT",
                  })}
                >
                  <InstallationName data={appData?.globalConfiguration} />
                </span>
                <CommunityPicker data={appData} />
              </>
            )}
          </div>
          <div className={styles.right}>
            {!isCommunityRoot && !hideSearch && (
              <>
                <CommunityNavList condensed />
                <SearchButton size="sm" data={searchData} />
              </>
            )}
            <AccountDropdown condensed={!isCommunityRoot} />
          </div>
          <div className={styles.mobileRight}>
            <DialogDisclosure as={MobileMenuToggle} {...dialog} />
          </div>
        </div>
        <BaseDrawer
          header={<CommunityPicker data={appData} />}
          footer={<InstallationName data={appData?.globalConfiguration} />}
          dialog={dialog}
          label={t("nav.menu")}
        >
          <div className={styles.mobileList}>
            <CommunityNavList mobile />
            <Search id="headerSearch" onSubmit={dialog.hide} mobile />
            <AccountDropdown mobile />
          </div>
        </BaseDrawer>
      </header>
      <div className={styles.printHeader} aria-hidden>
        <CommunityName />
      </div>
    </>
  );
}

const fragment = graphql`
  fragment AppHeaderFragment on Query {
    communities(order: POSITION_ASCENDING) {
      pageInfo {
        totalCount
      }
    }
    globalConfiguration {
      site {
        logoMode
      }
      ...InstallationNameFragment
    }
    ...CommunityPickerFragment
  }
`;
