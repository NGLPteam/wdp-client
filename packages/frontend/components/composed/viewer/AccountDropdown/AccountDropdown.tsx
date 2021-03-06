import React from "react";
import { useTranslation } from "react-i18next";
import { useSignInOut } from "@wdp/lib/api/hooks/useIsAuthenticated";
import * as Styled from "./AccountDropdown.styles";
import { useViewerContext } from "contexts";
import {
  Avatar,
  Dropdown,
  Link,
  NamedLink,
  NavMenuLink,
} from "components/atomic";

export default function AccountDropdown({ condensed, mobile }: Props) {
  const { avatarUrl, name } = useViewerContext();

  const { isAuthenticated, handleSignInOut } = useSignInOut();
  const { t } = useTranslation();

  const signInOutClass = mobile ? "t-label-lg" : "t-label-sm";

  const menuItems = [
    <NamedLink key={1} route="admin" passHref>
      <Link>{t("nav.admin")}</Link>
    </NamedLink>,
    <Link as="button" key={2} onClick={handleSignInOut}>
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
          onClick={handleSignInOut}
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
