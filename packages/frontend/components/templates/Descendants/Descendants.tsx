import { graphql, useFragment } from "react-relay";
import { DescendantsTemplateFragment$key } from "@/relay/DescendantsTemplateFragment.graphql";
import {
  CompactListBlock,
  GridListBlock,
  CardListBlock,
  SummaryListBlock,
  PromoListBlock,
} from "../lists/blocks";

const VARIANT_TO_COMPONENT = {
  COMPACT: CompactListBlock,
  CARDS: CardListBlock,
  GRID: GridListBlock,
  SUMMARY: SummaryListBlock,
  PROMOS: PromoListBlock,
};

export default function Descendants({
  data,
}: {
  data: DescendantsTemplateFragment$key;
}) {
  const template = useFragment(fragment, data);

  const variant = template?.descendantsDefinition?.variant;

  const BlockComponent =
    variant && variant !== "%future added value"
      ? VARIANT_TO_COMPONENT[variant]
      : null;

  return BlockComponent && <BlockComponent data={template} />;
}

const fragment = graphql`
  fragment DescendantsTemplateFragment on AnyMainTemplateInstance {
    ... on DescendantListTemplateInstance {
      __typename
      descendantsDefinition: definition {
        variant
      }
    }
    ...sharedListTemplateFragment
  }
`;
