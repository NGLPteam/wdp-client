import React from "react";
import { useTranslation } from "react-i18next";
import { useSignInOut } from "@wdp/lib/api/hooks/useIsAuthenticated";
import * as Styled from "./AccountDropdown.styles";
import { useViewerContext } from "hooks";
import { Avatar, Dropdown } from "components/atomic";

export default function AccountDropdown({ condensed, mobile }: Props) {
  const { avatarUrl, name } = useViewerContext();
  const { isAuthenticated, handleSignInOut } = useSignInOut();
  const { t } = useTranslation();

  const signInOutClass = mobile ? "t-label-lg" : "t-label-sm";

  return (
    <Styled.Wrapper>
      {avatarUrl ? (
        <Dropdown
          disclosure={
            <Styled.AccountButton>
              {avatarUrl && <Avatar url={avatarUrl} />}
              {name && <Styled.Name>{name}</Styled.Name>}
              <Styled.Icon icon="chevronDown" />
            </Styled.AccountButton>
          }
          label={t("nav.account")}
          menuItems={[
            <button className="a-link" key={1} onClick={handleSignInOut}>
              {t("common.sign_out")}
            </button>,
          ]}
        />
      ) : (
        isAuthenticated === false && (
          <button className={signInOutClass} onClick={handleSignInOut}>
            {t("common.sign_in")}
          </button>
        )
      )}
    </Styled.Wrapper>
  );
}

interface Props {
  condensed?: boolean;
  mobile?: boolean;
}
