import React from "react";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import { graphql, useFragment } from "react-relay";
import {
  ItemContributionListFragment,
  ItemContributionListFragment$key,
} from "@/relay/ItemContributionListFragment.graphql";
import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import type { ModelTableActionProps } from "react-table";

interface ItemContributionListProps {
  data: ItemContributionListFragment$key;
}

type ItemContributionNode = ItemContributionListFragment["nodes"][number];
function ItemContributionList<T extends OperationType>({
  data,
}: ItemContributionListProps) {
  const columns = [
    ModelColumns.NameColumn<ItemContributionNode>({
      route: "item",
      id: "name",
      accessor: (row) => {
        return row?.item?.title;
      },
    }),
    ModelColumns.CreatedAtColumn<ItemContributionNode>(),
  ];

  /* eslint-disable no-console */
  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<ItemContributionNode>) =>
      console.info(`edit ${row.original.slug}`),
  };
  /* eslint-enable no-console */

  const itemContributions = useFragment<ItemContributionListFragment$key>(
    fragment,
    data
  );

  return (
    <ModelListPage<T, ItemContributionListFragment, ItemContributionNode>
      modelName="item_contribution"
      columns={columns}
      actions={actions}
      viewOptions={[DataViewOptions.table]}
      data={itemContributions}
    />
  );
}

const fragment = graphql`
  fragment ItemContributionListFragment on ItemContributionConnection {
    nodes {
      slug
      createdAt
      updatedAt
      item {
        title
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default ItemContributionList;
