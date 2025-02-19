import { graphql, useFragment } from "react-relay";
import { useParams } from "next/navigation";
import { getRouteByEntityType } from "helpers";
import {
  EntityNavListFragment$data,
  EntityNavListFragment$key,
} from "@/relay/EntityNavListFragment.graphql";
import BrowseButton from "./BrowseButton";
import Dropdown from "./Dropdown";
import PagesList from "./PagesList";
import styles from "./EntityNavList.module.css";

export default function EntityNavList({ data }: Props) {
  const { slug } = useParams();
  const entity = useFragment(fragment, data);

  if (!entity || !slug) return null;

  const typeRoute = getRouteByEntityType(entity.__typename);
  const basePath = `/${typeRoute}/${slug}`;

  const orderings = entity.orderings?.nodes || [];
  const pages = entity.pages?.nodes;

  const renderOrderingButton =
    orderings.length === 1 &&
    entity.schemaVersion.identifier !== "journal_issue" &&
    entity.schemaVersion.identifier !== "journal_volume";

  const renderOrderings = renderOrderingButton ? (
    <BrowseButton basePath={basePath} ordering={orderings[0]} />
  ) : orderings.length > 1 ? (
    <Dropdown<Ordering>
      label="nav.browse"
      items={orderings}
      getItemProps={(item) => {
        const context =
          entity.schemaVersion.identifier === "journal" &&
          item.identifier === "articles"
            ? "ABBR"
            : "NONE";

        return {
          href: `${basePath}/browse/${item.identifier}?context=${context}`,
          label: `${item.name} (${item.count})`,
        };
      }}
    />
  ) : null;

  return (
    <ul className={styles.list}>
      {renderOrderings}
      {!!pages?.length && <PagesList pages={pages} basePath={basePath} />}
    </ul>
  );
}

type Props = {
  data?: EntityNavListFragment$key | null;
};

type Ordering = EntityNavListFragment$data["orderings"]["nodes"][number];

const fragment = graphql`
  fragment EntityNavListFragment on Entity {
    __typename
    schemaVersion {
      name
      identifier
    }
    orderings(availability: ENABLED) {
      nodes {
        name
        slug
        identifier
        count
      }
    }
    pages {
      nodes {
        title
        slug
      }
    }
  }
`;
