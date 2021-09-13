import React from "react";
import { graphql } from "react-relay";
import type { OperationType } from "relay-runtime";
import type {
  CollectionContributionListFragment,
  CollectionContributionListFragment$key,
} from "@/relay/CollectionContributionListFragment.graphql";
import type { ModelTableActionProps } from "react-table";
import { CellProps } from "react-table";
import { useRouter } from "next/router";
import { useMaybeFragment, useDestroyer } from "hooks";

import { NamedLink } from "components/atomic";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";

function CollectionContributionList<T extends OperationType>({
  data,
  subHead,
}: CollectionContributionListProps) {
  const router = useRouter();
  const destroy = useDestroyer();

  /* eslint-disable max-len */
  const collectionContributions = useMaybeFragment<CollectionContributionListFragment$key>(
    fragment,
    data
  );
  /* eslint-enable max-len */

  const columns = [
    {
      Header: "Name",
      id: "Name",
      disableSortBy: true,
      accessor: (row: CollectionContributionNode) => {
        return row?.collection?.title;
      },
      Cell: ({ row, value }: CellProps<CollectionContributionNode>) => {
        if (!row?.original?.collection?.slug) return value;
        return (
          <NamedLink
            route="item"
            routeParams={{ slug: row.original.collection.slug }}
            passHref
          >
            <a className="t-weight-md a-link">{value}</a>
          </NamedLink>
        );
      },
    },
    {
      Header: "Role",
      id: "role",
      accessor: (originalRow: CollectionContributionNode) => originalRow.role,
      disableSortBy: true,
    },
    ModelColumns.CreatedAtColumn<CollectionContributionNode>(),
  ];

  const actions = {
    handleEdit: ({
      row,
    }: ModelTableActionProps<CollectionContributionNode>) => {
      const pathname = window.location.pathname;
      router.push({
        pathname,
        query: {
          drawer: "editCollectionContribution",
          contribution: row.original.slug,
        },
      });
    },
    handleDelete: ({
      row,
    }: ModelTableActionProps<CollectionContributionNode>) =>
      destroy.contribution(
        { contributionId: row.original.id },
        "glossary.contribution.label"
      ),
  };

  return (
    <ModelListPage<
      T,
      CollectionContributionListFragment,
      CollectionContributionNode
    >
      modelName="collection_contribution"
      columns={columns}
      actions={actions}
      viewOptions={[DataViewOptions.table]}
      data={collectionContributions}
      subHead={subHead}
    />
  );
}

interface CollectionContributionListProps {
  data?: CollectionContributionListFragment$key;
  subHead?: boolean;
}

type CollectionContributionNode = CollectionContributionListFragment["nodes"][number];

const fragment = graphql`
  fragment CollectionContributionListFragment on CollectionContributionConnection {
    nodes {
      id
      slug
      createdAt
      updatedAt
      role
      collection {
        title
        slug
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default CollectionContributionList;
