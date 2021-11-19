import React from "react";
import { useRouterContext } from "@wdp/lib/routes";
import { useTranslation } from "react-i18next";
import { useUID } from "react-uid";
import { IconFactory } from "../../factories";
import * as Styled from "./AppFooterSearch.styles";

export default function AppFooterSearch() {
  const { t } = useTranslation();
  const searchId = useUID();
  const { findRouteByName } = useRouterContext();
  const searchRoute = findRouteByName("search");

  return (
    <Styled.SearchForm
      action={searchRoute?.path}
      className="a-button-secondary-sm l-flex l-flex--gap"
    >
      <Styled.SearchLabel htmlFor={searchId}>
        <span className="a-hidden">{t("search.label")}</span>
        <IconFactory icon="search" role="presentation" />
      </Styled.SearchLabel>
      <Styled.SearchInput
        id={searchId}
        type="search"
        name="q"
        placeholder={t("search.placeholder")}
      />
      <button className="a-hidden">{t("search.submit")}</button>
    </Styled.SearchForm>
  );
}
