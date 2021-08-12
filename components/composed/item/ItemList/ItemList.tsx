import React from "react";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import {
  ItemListFragment,
  ItemListFragment$key,
} from "@/relay/ItemListFragment.graphql";
import { graphql, useFragment } from "react-relay";
import ModelColumns from "components/composed/model/ModelColumns";
import type { ModelTableActionProps } from "react-table";

interface ItemListProps {
  data: ItemListFragment$key;
}

type ItemNode = ItemListFragment["nodes"][number];

function ItemList<T extends OperationType>({ data }: ItemListProps) {
  const columns = [
    ModelColumns.ThumbnailColumn<ItemNode>(),
    ModelColumns.NameColumn<ItemNode>({
      route: "item",
      accessor: "title",
    }),
    ModelColumns.CreatedAtColumn<ItemNode>(),
    ModelColumns.UpdatedAtColumn<ItemNode>(),
  ];

  /* eslint-disable no-console */
  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<ItemNode>) =>
      console.info(`edit ${row.original.slug}`),
    handleDelete: ({ row }: ModelTableActionProps<ItemNode>) =>
      console.info(`delete ${row.original.slug}`),
  };
  /* eslint-enable no-console */

  const items = useFragment<ItemListFragment$key>(fragment, data);
  return (
    <ModelListPage<T, ItemListFragment, ItemNode>
      modelName="item"
      actions={actions}
      selectable
      columns={columns}
      data={items}
    />
  );
}

const fragment = graphql`
  fragment ItemListFragment on ItemConnection {
    nodes {
      slug
      createdAt
      updatedAt
      title
      thumbnail {
        image: medium {
          png {
            url
            height
            width
            alt
          }
        }
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default ItemList;
