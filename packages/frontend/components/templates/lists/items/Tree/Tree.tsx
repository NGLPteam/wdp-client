import classNames from "classnames";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import NamedLink from "@/components/atomic/links/NamedLink";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import { getRouteByEntityType } from "@/helpers/routes";
import styles from "./Tree.module.css";

export default function TreeListItem({
  data,
  depth,
  singleton,
}: {
  data?: sharedListItemTemplateFragment$key | null;
  depth?: number;
  singleton?: boolean;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, subheader } = slots ?? {};

  if (!(entity?.__typename === "Item" || entity?.__typename === "Collection"))
    return null;

  const href = `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`;

  return (
    <li
      className={classNames(styles.item, { [styles.padStart]: singleton })}
      role="row"
      aria-level={depth || undefined}
      {...(depth
        ? {
            style: {
              "--BrowseTreeItem-level": depth,
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
      {subheader?.valid && !!subheader.content && (
        <span className={styles.subheader}>
          <InlineSlotWrapper content={subheader.content} />
        </span>
      )}
      {!!entity?.attributions.length && (
        <span className={styles.contributors}>
          <ContributorsList data={entity} />
        </span>
      )}
    </li>
  );
}
