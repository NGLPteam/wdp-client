import React from "react";
import { useTranslation } from "react-i18next";
import { IconFactory } from "../../factories";
import * as Styled from "./Search.styles";
import { RouteHelper } from "routes";

export default function Search({ placeholder, queryParams, mobile }: Props) {
  const { t } = useTranslation();
  const searchRoute = RouteHelper.findRouteByName("search");

  return (
    <Styled.SearchForm
      action={searchRoute?.path}
      className="a-button-secondary-sm l-flex l-flex--gap"
    >
      <Styled.SearchLabel htmlFor="navSearch">
        <span className="a-hidden">{placeholder || t("search.label")}</span>
        <IconFactory icon="search" role="presentation" />
      </Styled.SearchLabel>
      {queryParams &&
        Object.keys(queryParams).map((key) => (
          <input key={key} type="hidden" name={key} value={queryParams[key]} />
        ))}
      <Styled.SearchInput
        id="navSearch"
        type="search"
        name="q"
        placeholder={placeholder || t("search.label")}
        className={mobile ? "t-copy-sm" : undefined}
      />
      <Styled.SubmitButton type="submit">
        <IconFactory icon="arrowRight" role="presentation" />
        <span className="a-hidden">{t("search.submit")}</span>
      </Styled.SubmitButton>
    </Styled.SearchForm>
  );
}

type Props = {
  placeholder?: string;
  queryParams?: { [key: string]: string };
  mobile?: boolean;
};
