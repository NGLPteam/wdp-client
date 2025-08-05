import classNames from "classnames";
import { getBgClass } from "@/components/templates/helpers/bgColor";
import type {
  LinkListVariant,
  LinkListBackground,
  ListEntityContext,
} from "@/types/graphql-schema";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import CardItem from "../items/Card";
import GridItem from "../items/Grid";
import SummaryItem from "../items/Summary";
import PromoItem from "../items/Promo";
import CompactItem from "../items/Compact";
import TreeItem from "../items/Tree";
import TreeAccordions from "../items/Tree/Accordions";
import styles from "./List.module.css";

export type Props = {
  variant?: Exclude<LinkListVariant, "%future added value"> | null;
  bgColor?: LinkListBackground | null;
  hideCovers?: boolean;
  showContext?: ListEntityContext | null;
  isNested?: boolean | null;
  showContributors?: boolean | null;
  browseStyle?: boolean | null;
  treeDepth?: { min: number; max: number } | null;
  items:
    | readonly { template?: sharedListItemTemplateFragment$key | null }[]
    | null
    | undefined;
};

const TYPE_TO_CLASS = {
  CARDS: styles.cardList,
  GRID: styles.gridList,
  SUMMARY: styles.summaryList,
  PROMOS: styles.promoList,
  COMPACT: styles.compactList,
  TREE: styles.treeList,
};

const TYPE_TO_ITEM = {
  CARDS: CardItem,
  GRID: GridItem,
  SUMMARY: SummaryItem,
  PROMOS: PromoItem,
  COMPACT: CompactItem,
  TREE: TreeItem,
};

export default function List({
  variant,
  bgColor,
  hideCovers,
  showContext,
  isNested,
  items,
  showContributors,
  browseStyle,
  treeDepth,
}: Props) {
  if (!variant || !items) return null;

  const listClass = TYPE_TO_CLASS[variant];
  const Item = TYPE_TO_ITEM[variant];

  const bgClass = getBgClass(bgColor);

  return (
    <div className={styles.bgPositioner}>
      <ul
        className={classNames(bgClass, listClass, {
          [styles["summaryList--browse"]]: browseStyle && variant === "SUMMARY",
        })}
      >
        {variant === "TREE" ? (
          <TreeAccordions items={items} treeDepth={treeDepth} />
        ) : (
          items.map((item, i) => (
            <Item
              data={item.template}
              key={i}
              hideCover={hideCovers}
              showContext={showContext}
              isNested={isNested}
              showContributors={showContributors}
              browseStyle={browseStyle}
            />
          ))
        )}
      </ul>
    </div>
  );
}
