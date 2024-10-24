import { graphql, useFragment } from "react-relay";
import type { ImageAttachment } from "@/types/graphql-schema";
import { DescendantsTemplateFragment$key } from "@/relay/DescendantsTemplateFragment.graphql";
import { type Props as ListProps } from "../lists/List/List";
import { type SeeAllProps } from "../lists/SeeAll/SeeAll";
import {
  CompactListBlock,
  GridListBlock,
  CardListBlock,
  SummaryListBlock,
  PromoListBlock,
} from "../lists/blocks";
import { mock } from "./mock";
import type { ListItem } from "../lists/lists.types";
import type { Slot } from "../templates.types";

export type DescendantsTemplateData = {
  config: {
    background: "none" | "light" | "dark";
    blockTitle: string | null;
    variant: ListProps["variant"];
    heroImage: boolean;
    seeAll: Omit<SeeAllProps, "alignment">;
  };
  slots: {
    heroImage: ImageAttachment | null;
    items: ListItem[];
    entity: {
      context: Slot | null;
      header: Slot | null;
      subheader: Slot | null;
      metadata: Slot | null;
    };
  };
};

const VARIANT_TO_COMPONENT = {
  compact: CompactListBlock,
  card: CardListBlock,
  grid: GridListBlock,
  summary: SummaryListBlock,
  promo: PromoListBlock,
};

export default function Descendants({
  data,
}: {
  data: DescendantsTemplateFragment$key;
}) {
  const template = useFragment(fragment, data);

  const { config } = mock as DescendantsTemplateData;

  const BlockComponent = VARIANT_TO_COMPONENT[config.variant];

  return <BlockComponent data={mock} />;
}

const fragment = graphql`
  fragment DescendantsTemplateFragment on DescendantListTemplateInstance {
    slots {
      sampleBlock {
        content
      }
    }
  }
`;
