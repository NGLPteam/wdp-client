import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import {
  FileListFragment,
  FileListFragment$key,
} from "@/relay/FileListFragment.graphql";
import type { CellProps, ModelTableActionProps } from "react-table";
import { useMaybeFragment } from "hooks"; // useDestroyer, useDrawerHelper

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function FileList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: FileListProps) {
  const files = useMaybeFragment<FileListFragment$key>(fragment, data);
  // const drawerHelper = useDrawerHelper();
  // const destroy = useDestroyer();
  const { t } = useTranslation();

  const columns = [
    ModelColumns.ThumbnailColumn<FileNode>(),
    ModelColumns.StringColumn<FileNode>({
      Header: <>{t("columns.name")}</>,
      id: "name",
      Cell: ({ value }: CellProps<T>) => (
        <div className="a-cell-50">{value}</div>
      ),
    }),
    ModelColumns.StringColumn<FileNode>({
      Header: <>{t("columns.kind")}</>,
      id: "kind",
      capitalize: true,
      Cell: ({ value }: CellProps<T>) => (
        <div className="a-cell-50">{value}</div>
      ),
    }),
  ];

  const actions = {
    //   handleEdit: ({ row }: ModelTableActionProps<FileNode>) =>
    //     drawerHelper.open("editFile", {
    //       drawerSlug: row.original.slug,
    //     }),
    handleDelete: ({ row }: ModelTableActionProps<FileNode>) =>
      // destroy.file({ fileId: row.id }, "glossary.file.label"),
      console.info("Delete file", row.id),
  };

  return (
    <ModelListPage<T, FileListFragment, FileNode>
      modelName="file"
      columns={columns}
      actions={actions}
      data={files}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

interface FileListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: FileListFragment$key;
}

type FileNode = FileListFragment["nodes"][number];

const fragment = graphql`
  fragment FileListFragment on AnyAssetConnection {
    nodes {
      ... on Asset {
        id
        slug
        caption
        kind
        name
        thumbnail: preview {
          image: medium {
            png {
              alt
              url
              height
              width
            }
          }
        }
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default FileList;
