import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./EntityHero.styles";
import { EntityHeroFragment$key } from "@/relay/EntityHeroFragment.graphql";

export default function EntityHero({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return entity ? (
    <section className="a-bg-custom10">
      <Styled.HeroInner className="l-container-wide">
        <Styled.Header>{entity.title}</Styled.Header>
      </Styled.HeroInner>
    </section>
  ) : null;
}

interface Props {
  data?: EntityHeroFragment$key;
}

const fragment = graphql`
  fragment EntityHeroFragment on AnyEntity {
    ... on Collection {
      title
    }
    ... on Community {
      title
    }
    ... on Item {
      title
    }
  }
`;
