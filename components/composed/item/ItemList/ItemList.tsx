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
import PageHeader from "components/layout/PageHeader";
import { ALL_VIEW_OPTIONS } from "utils/view-options";
import { ButtonControlGroup, ButtonControlDrawer } from "components/atomic";
import { useTranslation } from "react-i18next";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function ItemList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: ItemListProps) {
  const items = useMaybeFragment<ItemListFragment$key>(fragment, data);
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();
  const { t } = useTranslation();

  const columns = [
    ModelColumns.ThumbnailColumn<ItemNode>({ route: "item" }),
    ModelColumns.NameColumn<ItemNode>({
      route: "item",
      accessor: "title",
    }),
    ModelColumns.SchemaColumn<ItemNode>(),
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

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addItem"
        // drawerQuery={{
        //   drawerSlug: sourceEntity?.slug ? sourceEntity.slug : "",
        // }}
        icon="plus"
      >
        {t("actions.add.item")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<T, ItemListFragment, ItemNode>
      modelName="item"
      actions={actions}
      buttons={buttons}
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
    ...ModelListPageFragment
  }
`;

export default ItemList;
