import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import type { CellProps, ModelTableActionProps } from "react-table";
import { useTranslation } from "react-i18next";
import ModelListPage from "components/composed/model/ModelListPage";
import { useDestroyer, useDrawerHelper, useMaybeFragment } from "hooks";
import {
  CollectionListFragment,
  CollectionListFragment$key,
} from "@/relay/CollectionListFragment.graphql";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { ALL_VIEW_OPTIONS } from "utils/view-options";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";
import ThumbnailColumnCell from "components/composed/model/ModelColumns/ThumbnailColumnCell";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function CollectionList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: CollectionListProps) {
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();
  const { t } = useTranslation();

  const collections = useMaybeFragment<CollectionListFragment$key>(
    fragment,
    data || null
  );

  const columns = [
    ModelColumns.ThumbnailColumn<CollectionNode>({
      route: "collection",
      Cell: ({ row, grid }: CellProps<CollectionNode>) => (
        <ThumbnailColumnCell data={row.original} grid={grid} />
      ),
    }),
    ModelColumns.NameColumn<CollectionNode>({
      route: "collection",
      accessor: "title",
    }),
    ModelColumns.SchemaColumn<CollectionNode>(),
    ModelColumns.CreatedAtColumn<CollectionNode>(),
    ModelColumns.UpdatedAtColumn<CollectionNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<CollectionNode>) =>
      drawerHelper.open("editCollection", { drawerSlug: row.original.slug }),
    handleDelete: ({ row }: ModelTableActionProps<CollectionNode>) =>
      destroy.collection(
        { collectionId: row.original.id },
        row.original.title || "glossary.collection"
      ),
    handleView: ({ row }: ModelTableActionProps<CollectionNode>) =>
      row.original.slug ? `/collections/${row.original.slug}` : null,
  };

  const buttons = !hideHeader ? (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer drawer="addCollection" icon="plus">
        {t("actions.add.collection")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  ) : undefined;

  return (
    <ModelListPage<T, CollectionListFragment, CollectionNode>
      modelName="collection"
      columns={columns}
      actions={actions}
      data={collections}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      viewOptions={ALL_VIEW_OPTIONS}
      buttons={buttons}
    />
  );
}

interface CollectionListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: CollectionListFragment$key;
}

type CollectionNode = CollectionListFragment["nodes"][number];

const fragment = graphql`
  fragment CollectionListFragment on CollectionConnection {
    nodes {
      id
      createdAt
      updatedAt
      title
      slug
      schemaVersion {
        name
        number
      }
      allowedActions
      ...ThumbnailColumnCellFragment
    }
    ...ModelListPageFragment
  }
`;

export default CollectionList;
