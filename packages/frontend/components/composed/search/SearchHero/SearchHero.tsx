import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./SearchHero.styles";
import { RouteHelper } from "routes";
import { IconFactory } from "components/factories";

export default function SearchHero() {
  const { t } = useTranslation();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchRoute = RouteHelper.findRouteByName("search");

  return (
    <section className="a-bg-custom10">
      <Styled.Form className="l-container-wide" action={searchRoute?.path}>
        <Styled.SearchWrapper>
          <Styled.SearchIconLabel htmlFor="communityHeroSearch">
            <IconFactory icon="search32" role="presentation" />
            <span className="a-hidden">{t("search.label")}</span>
          </Styled.SearchIconLabel>
          <Styled.SearchInput
            type="search"
            name="q"
            id="heroSearch"
            ref={inputRef}
            placeholder={t("search.community_placeholder")}
          />
          <Styled.SearchButton type="submit">
            <IconFactory icon="arrowRight" />
            <span className="a-hidden">{t("search.submit")}</span>
          </Styled.SearchButton>
        </Styled.SearchWrapper>
      </Styled.Form>
    </section>
  );
}
