import { graphql, useFragment } from "react-relay";
import { LinksTemplateFragment$key } from "@/relay/LinksTemplateFragment.graphql";
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

export default function Links({
  data,
  bgOverride,
}: {
  data: LinksTemplateFragment$key;
  bgOverride?: HeroBackground | null;
}) {
  const template = useFragment(fragment, data);

  const variant = template?.linksDefinition?.variant;

  const BlockComponent =
    variant && variant !== "%future added value"
      ? VARIANT_TO_COMPONENT[variant]
      : null;

  return (
    BlockComponent && <BlockComponent data={template} bgOverride={bgOverride} />
  );
}

const fragment = graphql`
  fragment LinksTemplateFragment on AnyMainTemplateInstance {
    ... on LinkListTemplateInstance {
      __typename
      linksDefinition: definition {
        variant
      }
    }
    ...sharedListTemplateFragment
  }
`;
