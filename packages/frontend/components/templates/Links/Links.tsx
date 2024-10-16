import type { ImageAttachment } from "@/types/graphql-schema";
import { type Props as ListProps } from "../lists/List/List";
import { type SeeAllProps } from "../Descendants/SeeAll/SeeAll";
import CompactListBlock from "../Descendants/Compact";
import GridListBlock from "../Descendants/Grid";
import PromoListBlock from "../Descendants/Promo";
import SummaryListBlock from "../Descendants/Summary";
import CardListBlock from "../Descendants/Card";
import { mock } from "./mock";
import type { ListItem } from "../lists/lists.types";
import type { Slot } from "../templates.types";

export type LinksTemplateData = {
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

export default function Descendants() {
  const { config } = mock as LinksTemplateData;

  const BlockComponent = VARIANT_TO_COMPONENT[config.variant];

  return <BlockComponent data={mock} />;
}
