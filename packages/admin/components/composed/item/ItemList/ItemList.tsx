import React from "react";
import type { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import type { ModelTableActionProps } from "react-table";
import { useMaybeFragment, useDestroyer, useDrawerHelper } from "hooks";
import { ALL_VIEW_OPTIONS } from "utils/view-options";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import type {
  ItemListFragment,
  ItemListFragment$key,
} from "@/relay/ItemListFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function ItemList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: ItemListProps) {
  const items = useMaybeFragment<ItemListFragment$key>(fragment, data);
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();

  const columns = [
    ModelColumns.ThumbnailColumn<ItemNode>({ route: "item" }),
    ModelColumns.NameColumn<ItemNode>({
      route: "item",
      accessor: "title",
    }),
    ModelColumns.ContributorsColumn<ItemNode>(),
    ModelColumns.SchemaColumn<ItemNode>(),
    ModelColumns.UpdatedAtColumn<ItemNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<ItemNode>) =>
      drawerHelper.open("editItem", { drawerSlug: row.original.slug }),
    handleDelete: ({ row }: ModelTableActionProps<ItemNode>) =>
      destroy.item(
        { itemId: row.original.id },
        row.original.title || "glossary.item"
      ),
  };

  return (
    <ModelListPage<T, ItemListFragment, ItemNode>
      modelName="item"
      actions={actions}
      columns={columns}
      data={items}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      viewOptions={ALL_VIEW_OPTIONS}
    />
  );
}

interface ItemListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: ItemListFragment$key;
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
      schemaVersion {
        name
        number
      }
      thumbnail {
        storage
        image: medium {
          png {
            url
            height
            width
            alt
          }
        }
      }
      items {
        pageInfo {
          totalCount
        }
      }
      allowedActions
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...ContributorsColumnFragment
    }
    ...ModelListPageFragment
  }
`;

export default ItemList;
