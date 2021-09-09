import React from "react";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import CommunityUpdateForm from "components/composed/community/CommunityUpdateForm";
import { QueryWrapper } from "components/api";
import type { CommunityUpdateDrawerQuery as Query } from "__generated__/CommunityUpdateDrawerQuery.graphql";

import { useDrawerHelper } from "hooks";
import { graphql } from "react-relay";

export default function CommunityUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();

  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ communitySlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          label={t("actions.edit.community")}
          header={data?.community?.title || t("drawers.editCommunity.title")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          {data && data.community && (
            <CommunityUpdateForm
              data={data.community}
              onSuccess={dialog.hide}
            />
          )}
        </Drawer>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query CommunityUpdateDrawerQuery($communitySlug: Slug!) {
    community(slug: $communitySlug) {
      title
      ...CommunityUpdateFormFragment
    }
  }
`;
