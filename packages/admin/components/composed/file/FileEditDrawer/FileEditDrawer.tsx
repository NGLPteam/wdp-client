import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";
import FileEditForm from "../FileEditForm";
import { useDrawerHelper } from "hooks";
import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import type { FileEditDrawerQuery as Query } from "__generated__/FileEditDrawerQuery.graphql";

export default function FileEditDrawer({
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
        data?.asset ? (
          <Drawer
            header={t("actions.edit.file_header")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            <FileEditForm data={data.asset} onSuccess={dialog.hide} />
          </Drawer>
        ) : null
      }
    </QueryWrapper>
  );
}

const query = graphql`
  query FileEditDrawerQuery($slug: Slug!) {
    asset(slug: $slug) {
      ...FileEditFormFragment
    }
  }
`;
