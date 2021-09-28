import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import {
  FileListFragment,
  FileListFragment$key,
} from "@/relay/FileListFragment.graphql";
import type { ModelTableActionProps } from "react-table";
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
    ModelColumns.StringColumn<FileNode>({
      Header: <>{t("columns.name")}</>,
      id: "name",
    }),
    ModelColumns.StringColumn<FileNode>({
      Header: <>{t("columns.kind")}</>,
      id: "kind",
      capitalize: true,
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
        preview {
          medium {
            webp {
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
