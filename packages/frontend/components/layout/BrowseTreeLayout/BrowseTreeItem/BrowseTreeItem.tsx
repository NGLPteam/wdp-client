import { graphql, useFragment } from "react-relay";
import { Markdown, NamedLink } from "components/atomic";
import { getRouteByEntityType } from "helpers";
import { BrowseTreeItemFragment$key } from "@/relay/BrowseTreeItemFragment.graphql";
import styles from "./BrowseTreeItem.module.css";
import Teasers from "./Teasers";

export default function BrowseTreeItem({ data }: Props) {
  const row = useFragment(fragment, data);

  const route = getRouteByEntityType(row.entry?.__typename) ?? "collections";
  const href = row.entry?.slug ? `/${route}/${row.entry?.slug}` : `/${route}`;

  return row ? (
    <div
      className={styles.row}
      role="row"
      aria-level={row.treeDepth || undefined}
      {...(row.treeDepth
        ? {
            style: {
              "--BrowseTreeItem-level": row.treeDepth,
            } as React.CSSProperties,
          }
        : {})}
    >
      <NamedLink href={href}>
        <span
          className="a-link t-h4"
          data-schema={row.entry?.schemaVersion?.identifier}
        >
          <Markdown.Title>{row.entry?.title}</Markdown.Title>
        </span>
      </NamedLink>
      {row.entry?.schemaVersion?.kind === "COLLECTION" && (
        <Teasers data={row.entry} />
      )}
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
        title
        schemaVersion {
          namespace
          identifier
          kind
        }
      }
      ...TeasersFragment
    }
  }
`;
