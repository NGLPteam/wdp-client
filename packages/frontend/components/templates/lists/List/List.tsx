import classNames from "classnames";
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
import styles from "./List.module.css";

export type Props = {
  variant?: Exclude<LinkListVariant, "%future added value"> | null;
  bgColor?: LinkListBackground | null;
  data: sharedListItemsTemplateFragment$key | null | undefined;
};

const TYPE_TO_CLASS = {
  CARDS: styles.cardList,
  GRID: styles.gridList,
  SUMMARY: styles.summaryList,
  PROMOS: styles.promoList,
  COMPACT: styles.compactList,
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

  const listClass = TYPE_TO_CLASS[variant];
  const Item = TYPE_TO_ITEM[variant];

  const bgClass = getBgClass(bgColor);

  return (
    <div className={styles.bgPositioner}>
      <ul className={classNames(bgClass, listClass)}>
        {items.map((item, i) => (
          <Item data={item.template} key={i} />
        ))}
      </ul>
    </div>
  );
}
