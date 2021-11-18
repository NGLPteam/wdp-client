import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./CommunityHero.styles";
import { CommunityHeroFragment$key } from "@/relay/CommunityHeroFragment.graphql";

export default function CommunityHero({ data }: Props) {
  const community = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return community ? (
    <section className="a-bg-custom10">
      <Styled.HeroInner className="l-container-wide">
        <h1>{t("common.welcome_to", { name: community.title })}</h1>
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
