import React from "react";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import {
  CollectionListFragment,
  CollectionListFragment$key,
} from "@/relay/CollectionListFragment.graphql";
import { graphql, useFragment } from "react-relay";
import ModelColumns from "components/composed/model/ModelColumns";
import type { ModelTableActionProps } from "react-table";

interface CollectionListProps {
  data: CollectionListFragment$key;
}

type CollectionNode = CollectionListFragment["nodes"][number];

function CollectionList<T extends OperationType>({
  data,
}: CollectionListProps) {
  const columns = [
    ModelColumns.ThumbnailColumn<CollectionNode>(),
    ModelColumns.NameColumn<CollectionNode>({
      route: "collection",
      accessor: "title",
    }),
    ModelColumns.CreatedAtColumn<CollectionNode>(),
    ModelColumns.UpdatedAtColumn<CollectionNode>(),
  ];

  /* eslint-disable no-console */
  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<CollectionNode>) =>
      console.info(`edit ${row.original.slug}`),
    handleDelete: ({ row }: ModelTableActionProps<CollectionNode>) =>
      console.info(`delete ${row.original.slug}`),
  };
  /* eslint-enable no-console */

  const collections = useFragment<CollectionListFragment$key>(fragment, data);
  return (
    <ModelListPage<T, CollectionListFragment, CollectionNode>
      modelName="collection"
      columns={columns}
      actions={actions}
      selectable
      data={collections}
    />
  );
}

const fragment = graphql`
  fragment CollectionListFragment on CollectionConnection {
    nodes {
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
