import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";

import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import RoleGrantAccessForm from "components/composed/role/RoleGrantAccessForm";
import { CommunityAddMemberDrawerQuery as Query } from "@/relay/CommunityAddMemberDrawerQuery.graphql";

export default function CommunityAddMemberDrawer({ dialog, params }: Props) {
  const { t } = useTranslation();

  const { drawerSlug } = params;

  return drawerSlug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug: drawerSlug }}>
      {({ data }) => (
        <Drawer
          label={t("actions.add.community.member")}
          header={
            data?.community?.title
              ? t("drawers.addMemberTo.title", {
                  name: data?.community?.title,
                })
              : t("drawers.addMember.title")
          }
          dialog={dialog}
          hideOnClickOutside={false}
        >
          <RoleGrantAccessForm
            onSuccess={dialog.hide}
            onCancel={dialog.hide}
            entityId={data?.community?.id}
            data={data}
          />
        </Drawer>
      )}
    </QueryWrapper>
  ) : null;
}

interface Props {
  dialog: DialogProps;
  params: Record<string, string | undefined | null>;
}

const query = graphql`
  query CommunityAddMemberDrawerQuery($slug: Slug!) {
    community(slug: $slug) {
      id
      title
    }
    ...RoleGrantAccessFormFragment
  }
`;
