import React, { useRef } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useUID } from "react-uid";
import { useRouterContext } from "@wdp/lib/routes";
import * as Styled from "./CommunityHero.styles";
import { IconFactory } from "components/factories";
import { CommunityHeroFragment$key } from "@/relay/CommunityHeroFragment.graphql";

export default function CommunityHero({ data }: Props) {
  const community = useMaybeFragment(fragment, data);
  const { t } = useTranslation();
  const searchId = useUID();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { findRouteByName } = useRouterContext();
  const searchRoute = findRouteByName("search");

  return community ? (
    <section className="a-bg-custom10">
      <Styled.HeroInner className="l-container-wide">
        <Styled.Header>
          {t("common.welcome_to", { name: community.title })}
        </Styled.Header>
        <Styled.Form action={searchRoute?.path}>
          <Styled.SearchWrapper>
            <Styled.SearchIconLabel htmlFor={searchId}>
              <IconFactory icon="search32" role="presentation" />
              <span className="a-hidden">{t("search.label")}</span>
            </Styled.SearchIconLabel>
            <Styled.SearchInput
              type="search"
              name="q"
              id={searchId}
              ref={inputRef}
              placeholder={t("search.community_placeholder")}
            />
            <button className="a-hidden" type="submit">
              {t("search.submit")}
            </button>
          </Styled.SearchWrapper>
        </Styled.Form>
      </Styled.HeroInner>
    </section>
  ) : null;
}

interface Props {
  data?: CommunityHeroFragment$key;
}

const fragment = graphql`
  fragment CommunityHeroFragment on Community {
    title
  }
`;
