import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useRouteSlug } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import * as Styled from "./SearchHero.styles";
import { RouteHelper } from "routes";
import { IconFactory } from "components/factories";

export default function SearchHero() {
  const { t } = useTranslation();

  const slug = useRouteSlug();

  const router = useRouter();

  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const searchRoute = RouteHelper.findRouteByName("search");
  const communityRoute = RouteHelper.findRouteByName("community.search");

  const onSubmit = async (data: { q?: string }) => {
    router.push(
      {
        pathname: slug ? communityRoute?.path : searchRoute?.path,
        query: {
          ...router.query,
          q: data.q,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <section className="a-bg-custom10">
      <Styled.Form
        className="l-container-wide"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Styled.SearchWrapper>
          <Styled.SearchIconLabel htmlFor="communityHeroSearch">
            <IconFactory icon="search32" role="presentation" />
            <span className="a-hidden">{t("search.label")}</span>
          </Styled.SearchIconLabel>
          <Styled.SearchInput
            type="search"
            id="heroSearch"
            placeholder={t("search.community_placeholder")}
            {...register("q")}
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
