import React from "react";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import { graphql, useFragment } from "react-relay";
import {
  CollectionContributionListFragment,
  CollectionContributionListFragment$key,
} from "@/relay/CollectionContributionListFragment.graphql";
import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import type { ModelTableActionProps } from "react-table";

interface CollectionContributionListProps {
  data: CollectionContributionListFragment$key;
}

type CollectionContributionNode = CollectionContributionListFragment["nodes"][number];
function CollectionContributionList<T extends OperationType>({
  data,
}: CollectionContributionListProps) {
  const columns = [
    ModelColumns.NameColumn<CollectionContributionNode>({
      route: "collection",
      id: "name",
      accessor: (row) => {
        return row?.collection?.title;
      },
    }),
    ModelColumns.CreatedAtColumn<CollectionContributionNode>(),
  ];

  /* eslint-disable no-console */
  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<CollectionContributionNode>) =>
      console.info(`edit ${row.original.slug}`),
  };
  /* eslint-enable no-console */

  /* eslint-disable max-len */
  const collectionContributions = useFragment<CollectionContributionListFragment$key>(
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
      collection {
        title
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default CollectionContributionList;
