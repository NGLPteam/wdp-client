import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import {
  ItemContributionListFragment,
  ItemContributionListFragment$key,
} from "@/relay/ItemContributionListFragment.graphql";
import type { ModelTableActionProps } from "react-table";
import { CellProps } from "react-table";
import { useRouter } from "next/router";
import { useMaybeFragment, useDestroyer } from "hooks";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import { NamedLink } from "components/atomic";

function ItemContributionList<T extends OperationType>({
  data,
  subHead,
}: ItemContributionListProps) {
  const itemContributions = useMaybeFragment<ItemContributionListFragment$key>(
    fragment,
    data
  );

  const router = useRouter();
  const destroy = useDestroyer();

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
    handleDelete: ({ row }: ModelTableActionProps<ItemContributionNode>) =>
      destroy.contribution(
        { contributionId: row.original.id },
        "glossary.contribution.label"
      ),
  };

  return (
    <ModelListPage<T, ItemContributionListFragment, ItemContributionNode>
      modelName="item_contribution"
      columns={columns}
      actions={actions}
      viewOptions={[DataViewOptions.table]}
      data={itemContributions}
      subHead={subHead}
    />
  );
}

interface ItemContributionListProps {
  data?: ItemContributionListFragment$key;
  subHead?: boolean;
}

type ItemContributionNode = ItemContributionListFragment["nodes"][number];

const fragment = graphql`
  fragment ItemContributionListFragment on ItemContributionConnection {
    nodes {
      id
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
