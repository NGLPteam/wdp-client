import React from "react";
import { useTranslation } from "react-i18next";
import { useSignInOut } from "@wdp/lib/api/hooks/useIsAuthenticated";
import * as Styled from "./AccountDropdown.styles";
import { useViewerContext } from "hooks";
import { Avatar, Dropdown } from "components/atomic";

export default function AccountDropdown({ condensed }: Props) {
  const { avatarUrl, name } = useViewerContext();
  const { isAuthenticated, handleSignInOut } = useSignInOut();
  const { t } = useTranslation();

  return (
    <div className="l-flex l-flex--align-center l-flex--gap">
      {name && !condensed && <span className="t-label-mix">{name}</span>}
      {avatarUrl && (
        <Dropdown
          disclosure={
            <Styled.AccountButton>
              {avatarUrl && <Avatar url={avatarUrl} />}
              <Styled.Icon icon="chevronDown" />
            </Styled.AccountButton>
          }
          label={t("nav.account")}
          menuItems={[
            <button key={1} onClick={handleSignInOut}>
              {t("common.sign_out")}
            </button>,
          ]}
        />
      )}
      {isAuthenticated === false && (
        <button className="t-label-sm" onClick={handleSignInOut}>
          {t("common.sign_in")}
        </button>
      )}
    </div>
  );
}

interface Props {
  condensed?: boolean;
}
