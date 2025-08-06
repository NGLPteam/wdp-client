import TreeAccordion from "components/atomic/accordions/TreeAccordion";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import Item from "./Tree";
import styles from "./Tree.module.css";

type ItemType = {
  template?:
    | (sharedListItemTemplateFragment$key & {
        entity?: { hierarchicalDepth: number };
      })
    | null;
};

type Props = {
  treeDepth?: { min: number; max: number } | null;
  items: readonly ItemType[] | null | undefined;
};

type AccordionItem = ItemType & { children?: AccordionItem[] };

export default function TreeAccordions({ items = [], treeDepth }: Props) {
  const addToTreeLevel = (
    item: AccordionItem,
    levelInt: number,
    levelArr: AccordionItem[],
  ) => {
    if (item?.template?.entity?.hierarchicalDepth === levelInt)
      return [...levelArr, { ...item, children: [] }];
    const parent = levelArr[levelArr.length - 1];
    parent.children = addToTreeLevel(item, levelInt + 1, parent.children ?? []);
    return levelArr;
  };

  const nodes = items?.reduce((arr, item): AccordionItem[] => {
    return addToTreeLevel(item, treeDepth?.min || 1, arr);
  }, [] as AccordionItem[]);

  const renderNode = (item: AccordionItem, i: number) =>
    item?.children?.length ? (
      <TreeAccordion
        SummaryComponent={<Item data={item.template} />}
        key={i}
        id={i.toString()}
        className={styles.accordion}
        open
      >
        <div>{item.children.map((c, i) => renderNode(c, i))}</div>
      </TreeAccordion>
    ) : (
      <Item key={i} data={item.template} singleton />
    );

  return nodes?.map((node, i) => renderNode(node, i));
}
