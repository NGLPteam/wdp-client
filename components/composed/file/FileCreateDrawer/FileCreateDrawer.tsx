import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { DialogProps } from "reakit/Dialog";
import { useDrawerHelper } from "hooks";
import type { FileCreateDrawerQuery as Query } from "__generated__/FileCreateDrawerQuery.graphql";
import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import FileCreateForm from "../FileCreateForm";

export default function FileCreateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();

  // Check if we have a slug
  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug: drawerSlug }}>
      {({ data }) =>
        data?.item?.id ? (
          <Drawer
            label={t("actions.create.file")}
            header={t("drawers.createFile.title")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            <FileCreateForm entityId={data?.item?.id} onSuccess={dialog.hide} />
          </Drawer>
        ) : null
      }
    </QueryWrapper>
  );
}

const query = graphql`
  query FileCreateDrawerQuery($slug: Slug!) {
    item(slug: $slug) {
      id
    }
  }
`;
