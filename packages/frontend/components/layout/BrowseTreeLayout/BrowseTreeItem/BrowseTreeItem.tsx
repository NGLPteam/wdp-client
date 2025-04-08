import { graphql, useFragment } from "react-relay";
import { NamedLink } from "components/atomic";
import { getRouteByEntityType } from "helpers";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import { BrowseTreeItemFragment$key } from "@/relay/BrowseTreeItemFragment.graphql";
import DotList from "@/components/atomic/DotList";
import styles from "./BrowseTreeItem.module.css";

export default function BrowseTreeItem({ data }: Props) {
  const row = useFragment(fragment, data);

  const { entry, treeDepth } = row ?? {};

  const route = getRouteByEntityType(entry?.__typename) ?? "collections";
  const href = entry?.slug ? `/${route}/${entry?.slug}` : `/${route}`;

  const { slots } = useSharedListItemTemplateFragment(
    entry?.layouts?.listItem?.template,
  );

  const { header, metaA, metaB } = slots ?? {};

  return row ? (
    <div
      className={styles.row}
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
    </div>
  ) : null;
}

interface Props {
  data: BrowseTreeItemFragment$key;
}

const fragment = graphql`
  fragment BrowseTreeItemFragment on OrderingEntry {
    # How much indentation should be applied
    treeDepth
    entry {
      __typename
      ... on Sluggable {
        slug
      }
      ... on Entity {
        layouts {
          listItem {
            template {
              ...sharedListItemTemplateFragment
            }
          }
        }
      }
    }
  }
`;
