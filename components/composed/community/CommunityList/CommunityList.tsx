import React from "react";
import { OperationType } from "relay-runtime";
import {
  CommunityListFragment$key,
  CommunityListFragment,
} from "@/relay/CommunityListFragment.graphql";
import { graphql } from "react-relay";
import type { ModelTableActionProps } from "react-table";
import { useMaybeFragment } from "hooks";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";

function CommunityList<T extends OperationType>({ data }: CommunityListProps) {
  const communities = useMaybeFragment<CommunityListFragment$key>(
    fragment,
    data
  );

  const columns = [
    ModelColumns.NameColumn<CommunityNode>({
      route: "community",
      accessor: "name",
    }),
    ModelColumns.CreatedAtColumn<CommunityNode>(),
    ModelColumns.UpdatedAtColumn<CommunityNode>(),
  ];

  /* eslint-disable no-console */
  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<CommunityNode>) =>
      console.info(`edit ${row.original.slug}`),
    handleDelete: ({ row }: ModelTableActionProps<CommunityNode>) =>
      console.info(`delete ${row.original.slug}`),
  };
  /* eslint-enable no-console */

  return (
    <ModelListPage<T, CommunityListFragment, CommunityNode>
      modelName="community"
      viewOptions={[DataViewOptions.table]}
      columns={columns}
      actions={actions}
      data={communities}
    />
  );
}

interface CommunityListProps {
  data?: CommunityListFragment$key;
}

type CommunityNode = CommunityListFragment["edges"][number]["node"];

const fragment = graphql`
  fragment CommunityListFragment on CommunityConnection {
    edges {
      node {
        slug
        createdAt
        updatedAt
        name
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default CommunityList;
