import { getBgClass } from "@/components/templates/helpers/bgColor";
import type {
  LinkListVariant,
  LinkListBackground,
} from "@/types/graphql-schema";
import { sharedListItemsTemplateFragment$key } from "@/relay/sharedListItemsTemplateFragment.graphql";
import { useSharedListItemsTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import CardItem from "../items/Card";
import GridItem from "../items/Grid";
import SummaryItem from "../items/Summary";
import PromoItem from "../items/Promo";
import CompactItem from "../items/Compact";
import * as Styled from "./List.styles";

export type Props = {
  variant?: Exclude<LinkListVariant, "%future added value"> | null;
  bgColor?: LinkListBackground | null;
  data: sharedListItemsTemplateFragment$key | null | undefined;
};

const TYPE_TO_LIST = {
  CARDS: Styled.CardList,
  GRID: Styled.GridList,
  SUMMARY: Styled.SummaryList,
  PROMOS: Styled.PromoList,
  COMPACT: Styled.CompactList,
};

const TYPE_TO_ITEM = {
  CARDS: CardItem,
  GRID: GridItem,
  SUMMARY: SummaryItem,
  PROMOS: PromoItem,
  COMPACT: CompactItem,
};

export default function List({ variant, bgColor, data }: Props) {
  const items = useSharedListItemsTemplateFragment(data);

  if (!variant || !items) return null;

  const List = TYPE_TO_LIST[variant];
  const Item = TYPE_TO_ITEM[variant];

  const bgClass = getBgClass(bgColor);

  return (
    <Styled.BGPositioner>
      <List className={bgClass}>
        {items.map((item, i) => (
          <Item data={item.template} key={i} />
        ))}
      </List>
    </Styled.BGPositioner>
  );
}
