import React from "react";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import {
  CollectionContributionListFragment,
  CollectionContributionListFragment$key,
} from "@/relay/CollectionContributionListFragment.graphql";
import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import type { ModelTableActionProps } from "react-table";
import { CellProps } from "react-table";
import { NamedLink } from "components/atomic";
import { useRouter } from "next/router";
import { useMaybeFragment } from "hooks";

interface CollectionContributionListProps {
  data?: CollectionContributionListFragment$key;
}

type CollectionContributionNode = CollectionContributionListFragment["nodes"][number];
function CollectionContributionList<T extends OperationType>({
  data,
}: CollectionContributionListProps) {
  const router = useRouter();

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
  };

  /* eslint-disable max-len */
  const collectionContributions = useMaybeFragment<CollectionContributionListFragment$key>(
    fragment,
    data
  );
  /* eslint-enable max-len */

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
    />
  );
}

const fragment = graphql`
  fragment CollectionContributionListFragment on CollectionContributionConnection {
    nodes {
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
