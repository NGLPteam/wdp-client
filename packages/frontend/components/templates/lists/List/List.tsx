import CardItem from "../Card";
import GridItem from "../Grid";
import SummaryItem from "../Summary";
import PromoItem from "../Promo";
import CompactItem from "../Compact";
import { mock } from "../mock";
import * as Styled from "./List.styles";
import type { ListItem } from "../lists.types";

export type Props = {
  variant: "card" | "grid" | "summary" | "promo" | "compact";
  bgColor?: "none" | "light" | "dark";
  items: ListItem[];
};

const TYPE_TO_LIST = {
  card: Styled.CardList,
  grid: Styled.GridList,
  summary: Styled.SummaryList,
  promo: Styled.PromoList,
  compact: Styled.CompactList,
};

const TYPE_TO_ITEM = {
  card: CardItem,
  grid: GridItem,
  summary: SummaryItem,
  promo: PromoItem,
  compact: CompactItem,
};

const BG_COLOR_MAP = {
  none: "a-bg-custom00",
  light: "a-bg-custom10",
  dark: "a-bg-neutral90",
};

export default function List({ variant, bgColor, items: itemsProp }: Props) {
  const items = itemsProp ?? [mock, mock, mock];

  const List = TYPE_TO_LIST[variant];
  const Item = TYPE_TO_ITEM[variant];

  const bgClass = bgColor ? BG_COLOR_MAP[bgColor] : "a-bg-custom00";

  return (
    <Styled.BGPositioner>
      <List className={bgClass}>
        {items.map((item, i) => (
          <Item data={item} key={i} />
        ))}
      </List>
    </Styled.BGPositioner>
  );
}
