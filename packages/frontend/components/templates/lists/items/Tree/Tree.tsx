import DotList from "@/components/atomic/DotList";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import NamedLink from "@/components/atomic/links/NamedLink";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import { getRouteByEntityType } from "@/helpers/routes";
import styles from "./Tree.module.css";

export default function TreeListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, metaA, metaB } = slots ?? {};

  if (!(entity?.__typename === "Item" || entity?.__typename === "Collection"))
    return null;

  const href = `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`;

  const treeDepth = 1;

  return (
    <li
      className={styles.item}
      role="row"
      aria-level={treeDepth || undefined}
      {...(treeDepth
        ? {
            style: {
              "--BrowseTreeItem-level": treeDepth,
            } as React.CSSProperties,
          }
        : {})}
    >
      {header?.valid && !!header.content && (
        <NamedLink href={href}>
          <span className="a-link t-h4">
            <InlineSlotWrapper content={header.content} />
          </span>
        </NamedLink>
      )}
      <DotList className="t-copy-lighter t-copy-sm">
        {metaA?.valid && !!metaA.content && (
          <InlineSlotWrapper content={metaA.content} />
        )}
        {metaB?.valid && !!metaB.content && (
          <InlineSlotWrapper content={metaB.content} />
        )}
      </DotList>
    </li>
  );
}
