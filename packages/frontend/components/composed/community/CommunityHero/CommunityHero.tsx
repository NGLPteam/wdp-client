import React, { useRef } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./CommunityHero.styles";
import { IconFactory } from "components/factories";
import { CommunityHeroFragment$key } from "@/relay/CommunityHeroFragment.graphql";
import { RouteHelper } from "routes";

export default function CommunityHero({ data }: Props) {
  const community = useMaybeFragment(fragment, data);
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchRoute = RouteHelper.findRouteByName("search");

  return community ? (
    <section className="a-bg-custom10">
      <Styled.HeroInner className="l-container-wide">
        <Styled.Header>
          {t("common.welcome_to", { name: community.title })}
        </Styled.Header>
        <Styled.Form action={searchRoute?.path}>
          <Styled.SearchWrapper>
            <Styled.SearchIconLabel htmlFor="communityHeroSearch">
              <IconFactory icon="search32" role="presentation" />
              <span className="a-hidden">{t("search.label")}</span>
            </Styled.SearchIconLabel>
            <Styled.SearchInput
              type="search"
              name="q"
              id="communityHeroSearch"
              ref={inputRef}
              placeholder={t("search.community_placeholder")}
            />
            <Styled.SearchButton type="submit">
              <IconFactory icon="arrowRight" />
              <span className="a-hidden">{t("search.submit")}</span>
            </Styled.SearchButton>
          </Styled.SearchWrapper>
        </Styled.Form>
      </Styled.HeroInner>
    </section>
  ) : null;
}

interface Props {
  data?: CommunityHeroFragment$key | null;
}

const fragment = graphql`
  fragment CommunityHeroFragment on Community {
    title
  }
`;
