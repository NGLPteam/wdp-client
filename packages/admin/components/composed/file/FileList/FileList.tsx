import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import {
  FileListFragment,
  FileListFragment$key,
} from "@/relay/FileListFragment.graphql";
import type { CellProps, ModelTableActionProps } from "react-table";
import { useDestroyer, useMaybeFragment, useRouteSlug } from "hooks";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import { ButtonControlGroup, ButtonControlDrawer } from "components/atomic";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function FileList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: FileListProps) {
  const files = useMaybeFragment<FileListFragment$key>(fragment, data);
  const slug = useRouteSlug();
  const { t } = useTranslation();
  const destroy = useDestroyer();

  const columns = [
    ModelColumns.ThumbnailColumn<FileNode>({}),
    ModelColumns.NameColumn<FileNode>({
      accessor: "name",
    }),
    ModelColumns.StringColumn<FileNode>({
      Header: <>{t("lists.kind_column")}</>,
      id: "kind",
      Cell: ({ value }: CellProps<T>) => (
        <div className={value === "pdf" ? "t-uppercase" : "t-capitalize"}>
          {value}
        </div>
      ),
    }),
  ];

  const actions = {
    handleDownload: ({ row }: ModelTableActionProps<FileNode>) =>
      row.original.downloadUrl ? row.original.downloadUrl : null,
    handleDelete: ({ row }: ModelTableActionProps<FileNode>) => {
      if (!row.original.id) return;
      destroy.file(
        { assetId: row.original.id },
        row.original.name || "glossary.file"
      );
    },
  };

  // TODO: We need an authorization check here.
  // There are currently no allowedActions around assets.
  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        icon="plus"
        drawer="addFile"
        drawerQuery={{ drawerSlug: slug || "" }}
      >
        {t("actions.create.file")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<T, FileListFragment, FileNode>
      modelName="file"
      columns={columns}
      data={files}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      buttons={buttons}
      actions={actions}
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
        downloadUrl
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
    ...ModelListPageFragment
  }
`;

export default FileList;
