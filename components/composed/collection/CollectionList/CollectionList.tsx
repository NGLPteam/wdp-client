import React from "react";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import { useDestroyer, useDrawerHelper, useMaybeFragment } from "hooks";
import {
  CollectionListFragment,
  CollectionListFragment$key,
} from "@/relay/CollectionListFragment.graphql";
import { graphql } from "react-relay";
import ModelColumns from "components/composed/model/ModelColumns";
import type {
  ModelTableActionProps,
  ModelTableMultiSelectActionProps,
} from "react-table";
import PageHeader from "components/layout/PageHeader";
import { ALL_VIEW_OPTIONS } from "utils/view-options";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function CollectionList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: CollectionListProps) {
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();

  const collections = useMaybeFragment<CollectionListFragment$key>(
    fragment,
    data || null
  );

  const columns = [
    ModelColumns.ThumbnailColumn<CollectionNode>(),
    ModelColumns.NameColumn<CollectionNode>({
      route: "collection",
      accessor: "title",
    }),
    ModelColumns.CreatedAtColumn<CollectionNode>(),
    ModelColumns.UpdatedAtColumn<CollectionNode>(),
  ];

  /** Define the actions for a single collection */
  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<CollectionNode>) =>
      drawerHelper.open("editCollection", { drawerSlug: row.original.slug }),
    handleDelete: ({ row }: ModelTableActionProps<CollectionNode>) =>
      destroy.collection(
        { collectionId: row.original.id },
        row.original.title || "glossary.collection"
      ),
  };

  /** Define the actions for multiple collections */
  const multiselectActions = {
    handleDelete: ({
      rows,
    }: ModelTableMultiSelectActionProps<CollectionNode>) => {
      const deleteObj = rows.map(({ original }) => ({
        id: original.id,
        title: original.title,
      }));
      // TODO: Cycle through each collection OR use multi-delete API (TBD)
      console.info("handleDelete", deleteObj);
    },
  };

  return (
    <ModelListPage<T, CollectionListFragment, CollectionNode>
      modelName="collection"
      columns={columns}
      actions={actions}
      multiselectActions={multiselectActions}
      selectable
      data={collections}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      viewOptions={ALL_VIEW_OPTIONS}
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

export default CollectionList;
