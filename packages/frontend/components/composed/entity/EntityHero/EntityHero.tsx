import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./EntityHero.styles";
import { HeroImage } from "components/atomic";
import { EntityHeroFragment$key } from "@/relay/EntityHeroFragment.graphql";

export default function EntityHero({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return entity ? (
    <section className="a-bg-custom10">
      <Styled.HeroInner className="l-container-wide">
        <h2>{entity.title}</h2>
      </Styled.HeroInner>
      {entity.heroImage?.storage && (
        <HeroImage
          data={entity.heroImage}
          metadata={entity.heroImageMetadata}
        />
      )}
    </section>
  ) : null;
}

interface Props {
  data?: EntityHeroFragment$key | null;
}

const fragment = graphql`
  fragment EntityHeroFragment on AnyEntity {
    ... on Collection {
      title
      heroImage {
        storage
        ...HeroImageFragment
      }
      heroImageMetadata {
        ...HeroImageMetadataFragment
      }
    }
    ... on Item {
      title
      heroImage {
        storage
        ...HeroImageFragment
      }
      heroImageMetadata {
        ...HeroImageMetadataFragment
      }
    }
  }
`;
