import React from "react";
import type { OperationType } from "relay-runtime";
import type {
  ItemListFragment,
  ItemListFragment$key,
} from "@/relay/ItemListFragment.graphql";
import { graphql } from "react-relay";
import { useMaybeFragment, useDestroyer, useDrawerHelper } from "hooks";
import type { ModelTableActionProps } from "react-table";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";

function ItemList<T extends OperationType>({ data, subHead }: ItemListProps) {
  const items = useMaybeFragment<ItemListFragment$key>(fragment, data);
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();

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
      drawerHelper.open("editItem", { drawerSlug: row.original.slug }),
    handleDelete: ({ row }: ModelTableActionProps<ItemNode>) =>
      destroy.item(
        { itemId: row.original.id },
        row.original.title || "glossary.item"
      ),
  };
  /* eslint-enable no-console */

  return (
    <ModelListPage<T, ItemListFragment, ItemNode>
      modelName="item"
      actions={actions}
      selectable
      columns={columns}
      data={items}
      subHead={subHead}
    />
  );
}

interface ItemListProps {
  data?: ItemListFragment$key;
  subHead?: boolean;
}

type ItemNode = ItemListFragment["nodes"][number];

const fragment = graphql`
  fragment ItemListFragment on ItemConnection {
    nodes {
      id
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
