import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import {
  FileListFragment,
  FileListFragment$key,
} from "@/relay/FileListFragment.graphql";
import type { CellProps } from "react-table"; // ModelTableActionProps
import { useMaybeFragment, useRouteSlug } from "hooks"; // useDestroyer, useDrawerHelper

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import { ButtonControlGroup } from "components/atomic";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function FileList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: FileListProps) {
  const files = useMaybeFragment<FileListFragment$key>(fragment, data);
  const slug = useRouteSlug();
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
      Cell: ({ value }: CellProps<T>) => (
        <div
          className={`a-cell-50 ${
            value === "pdf" ? "t-uppercase" : "t-capitalize"
          }`}
        >
          {value}
        </div>
      ),
    }),
  ];

  // const actions = {
  //   handleEdit: ({ row }: ModelTableActionProps<FileNode>) =>
  //     drawerHelper.open("editFile", { drawerSlug: row.original.slug }),
  //   handleDelete: ({ row }: ModelTableActionProps<FileNode>) =>
  //     destroy.file({ fileId: row.id }, "glossary.file.label"),
  // };

  // TODO: We need an authorization check here.
  // There are currently no allowedActions around assets.
  const buttons = (
    <ButtonControlGroup
      buttons={[
        {
          drawer: "addFile",
          drawerQuery: { drawerSlug: slug || "" },
          icon: "plus",
          children: t("actions.create.file"),
        },
      ]}
      toggleLabel={t("options")}
      menuLabel={t("options")}
    />
  );

  return (
    <ModelListPage<T, FileListFragment, FileNode>
      modelName="file"
      columns={columns}
      data={files}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      buttons={buttons}
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
