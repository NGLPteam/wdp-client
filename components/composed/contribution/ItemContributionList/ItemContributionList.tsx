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
import { CellProps } from "react-table";
import { NamedLink } from "components/atomic";
import { useRouter } from "next/router";

interface ItemContributionListProps {
  data: ItemContributionListFragment$key;
}

type ItemContributionNode = ItemContributionListFragment["nodes"][number];
function ItemContributionList<T extends OperationType>({
  data,
}: ItemContributionListProps) {
  const router = useRouter();
  const columns = [
    {
      Header: "Name",
      id: "Name",
      disableSortBy: true,
      accessor: (row: ItemContributionNode) => {
        return row?.item?.title;
      },
      Cell: ({ row, value }: CellProps<ItemContributionNode>) => {
        if (!row?.original?.item?.slug) return value;
        return (
          <NamedLink
            route="item"
            routeParams={{ slug: row.original.item.slug }}
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
      accessor: (originalRow: ItemContributionNode) => originalRow.role,
      disableSortBy: true,
    },
    ModelColumns.CreatedAtColumn<ItemContributionNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<ItemContributionNode>) => {
      const pathname = window.location.pathname;
      router.push({
        pathname,
        query: {
          drawer: "editItemContribution",
          contribution: row.original.slug,
        },
      });
    },
  };

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
      role
      item {
        slug
        title
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default ItemContributionList;
