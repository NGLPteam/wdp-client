import React from "react";
import { useRouterContext } from "@wdp/lib/routes";
import { useTranslation } from "react-i18next";
import { IconFactory } from "../../factories";
import * as Styled from "./NavSearch.styles";

export default function AppFooterSearch({ name }: Props) {
  const { t } = useTranslation();
  const { findRouteByName } = useRouterContext();
  const searchRoute = findRouteByName("search");

  const placeholder = name
    ? t("search.journal_placeholder", { name: name })
    : t("search.placeholder");

  return (
    <Styled.SearchForm
      action={searchRoute?.path}
      className="a-button-secondary-sm l-flex l-flex--gap"
    >
      <Styled.SearchLabel htmlFor="navSearch">
        <span className="a-hidden">
          {t("search.label")}
          {name && " " + name}
        </span>
        <IconFactory icon="search" role="presentation" />
      </Styled.SearchLabel>
      <Styled.SearchInput
        id="navSearch"
        type="search"
        name="q"
        placeholder={placeholder}
      />
      <button className="a-hidden">{t("search.submit")}</button>
    </Styled.SearchForm>
  );
}

type Props = {
  name?: string;
};
