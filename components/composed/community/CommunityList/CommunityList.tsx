import React from "react";

import { OperationType } from "relay-runtime";
import {
  CommunityListFragment$key,
  CommunityListFragment,
} from "@/relay/CommunityListFragment.graphql";
import { graphql } from "react-relay";
import type { ModelTableActionProps } from "react-table";
import { useMaybeFragment, useDrawerHelper, useDestroyer } from "hooks";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";

function CommunityList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: CommunityListProps) {
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

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

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<CommunityNode>) =>
      drawerHelper.open("editCommunity", { drawerSlug: row.original.slug }),
    handleDelete: ({ row }: ModelTableActionProps<CommunityNode>) =>
      destroy.community({ communityId: row.original.id }, row.original.name),
  };

  return (
    <ModelListPage<T, CommunityListFragment, CommunityNode>
      modelName="community"
      viewOptions={[DataViewOptions.table]}
      columns={columns}
      actions={actions}
      data={communities}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

interface CommunityListProps {
  data?: CommunityListFragment$key;
  headerStyle?: "primary" | "secondary";
  hideHeader?: boolean;
}

type CommunityNode = CommunityListFragment["edges"][number]["node"];

const fragment = graphql`
  fragment CommunityListFragment on CommunityConnection {
    edges {
      node {
        slug
        id
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
