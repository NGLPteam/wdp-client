import { useTranslation } from "react-i18next";
import useViewerContext from "contexts/useViewerContext";
import {
  Avatar,
  Dropdown,
  Link,
  NamedLink,
  NavMenuLink,
} from "components/atomic";
import { useCallback, useMemo } from "react";
import { useSession } from "@/lib/auth/session";
import * as Styled from "./AccountDropdown.styles";
import { signIn, signOut } from "./actions";

export default function AccountDropdown({ condensed, mobile }: Props) {
  const { avatarUrl, name } = useViewerContext();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { status, data } = useSession();

  const { t } = useTranslation();

  const signInOutClass = mobile ? "t-label-lg" : "t-label-sm";

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
      ? [
          <NamedLink key={1} href={adminUrl}>
            <Link>{t("nav.admin")}</Link>
          </NamedLink>,
        ]
      : []),
    <Link as="button" key={2} onClick={handleClick}>
      {t("common.sign_out")}
    </Link>,
  ];

  return (
    <Styled.Wrapper>
      {isAuthenticated ? (
        <Dropdown
          disclosure={
            <Styled.AccountButton>
              <Avatar url={avatarUrl} />
              {name && (
                <Styled.Name data-condensed={condensed}>{name}</Styled.Name>
              )}
              <Styled.Icon icon="chevronDown" />
            </Styled.AccountButton>
          }
          label={t("nav.account")}
          menuItems={menuItems}
        />
      ) : (
        <NavMenuLink
          as="button"
          className={signInOutClass}
          onClick={handleClick}
        >
          {t("common.sign_in")}
        </NavMenuLink>
      )}
    </Styled.Wrapper>
  );
}

interface Props {
  condensed?: boolean;
  mobile?: boolean;
}
