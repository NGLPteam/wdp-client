import { useTranslation } from "react-i18next";
import useViewerContext from "contexts/useViewerContext";
import { Avatar, Dropdown, Link } from "components/atomic";
import { useCallback, useMemo } from "react";
import IconFactory from "@/components/factories/IconFactory";
import { useSession } from "@/lib/auth/session";
import styles from "./AccountDropdown.module.css";
import { signIn, signOut } from "./actions";

export default function AccountDropdown({ condensed }: Props) {
  const { avatarUrl, name } = useViewerContext();
  const { status } = useSession();

  const { t } = useTranslation();

  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

  const handleClick = useCallback(() => {
    if (status === "unauthenticated") {
      signIn();
    } else {
      signOut();
    }
  }, [status]);

  const isAuthenticated = useMemo(() => status === "authenticated", [status]);

  const menuItems = [
    ...(adminUrl
      ? [<Dropdown.Link key={1} href={adminUrl} label={t("nav.admin")} />]
      : []),
    <Link as="button" key={2} onClick={handleClick}>
      {t("common.sign_out")}
    </Link>,
  ];

  return (
    <div className={styles.wrapper}>
      {isAuthenticated ? (
        <Dropdown
          disclosure={
            <div className={styles.disclosure}>
              <Avatar url={avatarUrl} />
              {name && (
                <span className={styles.name} data-condensed={condensed}>
                  {name}
                </span>
              )}
              <IconFactory className={styles.icon} icon="chevronDown" />
            </div>
          }
          label={t("nav.account")}
          menuItems={menuItems}
        />
      ) : null}
    </div>
  );
}

interface Props {
  condensed?: boolean;
  mobile?: boolean;
}
