import { graphql, useFragment } from "react-relay";
import { DescendantsTemplateFragment$key } from "@/relay/DescendantsTemplateFragment.graphql";
import { getRouteByEntityType } from "@/helpers/routes";
import type { HeroBackground } from "@/types/graphql-schema";
import {
  CompactListBlock,
  GridListBlock,
  CardListBlock,
  SummaryListBlock,
  PromoListBlock,
  TreeListBlock,
} from "../lists/blocks";

const VARIANT_TO_COMPONENT = {
  COMPACT: CompactListBlock,
  CARDS: CardListBlock,
  GRID: GridListBlock,
  SUMMARY: SummaryListBlock,
  PROMOS: PromoListBlock,
  TREE: TreeListBlock,
};

export default function Descendants({
  data,
  bgOverride,
}: {
  data: DescendantsTemplateFragment$key;
  bgOverride?: HeroBackground | null;
}) {
  const template = useFragment(fragment, data);

  const { entity, descendantsDefinition } = template ?? {};

  const variant = descendantsDefinition?.variant;

  const basePath = entity
    ? `/${getRouteByEntityType(entity.__typename)}/${entity.slug}`
    : null;

  const BlockComponent =
    variant && variant !== "%future added value"
      ? VARIANT_TO_COMPONENT[variant]
      : null;

  return (
    BlockComponent && (
      <BlockComponent
        data={template}
        basePath={basePath}
        bgOverride={bgOverride}
      />
    )
  );
}

const fragment = graphql`
  fragment DescendantsTemplateFragment on AnyMainTemplateInstance {
    ... on DescendantListTemplateInstance {
      entity {
        __typename
        ... on Sluggable {
          slug
        }
      }
      descendantsDefinition: definition {
        variant
      }
    }
    ...sharedListTemplateFragment
  }
`;
