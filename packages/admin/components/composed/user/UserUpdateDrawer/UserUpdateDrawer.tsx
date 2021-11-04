import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";
import UserUpdateForm from "../UserUpdateForm";
import { useDrawerHelper } from "hooks";
import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import { UserUpdateDrawerQuery as Query } from "@/relay/UserUpdateDrawerQuery.graphql";

export default function UserUpdateDrawer({ dialog, params }: Props) {
  const drawerHelper = useDrawerHelper();
  const { t } = useTranslation();
  const { drawerSlug } = params;

  if (!drawerSlug) {
    drawerHelper.close();
    return null;
  }

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ userSlug: drawerSlug }}
    >
      {({ data }) => (
        <Drawer
          label={t("actions.edit.user")}
          header={
            data?.user?.name ? data?.user.name : t("actions.edit.user_header")
          }
          dialog={dialog}
          hideOnClickOutside={false}
        >
          {data && data.user && (
            <UserUpdateForm
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
              data={data.user}
            />
          )}
        </Drawer>
      )}
    </QueryWrapper>
  );
}

interface Props {
  dialog: DialogProps;
  params: Record<string, string | undefined | null>;
}

// This fun little query gets the right id and title depending on the entity type.
const query = graphql`
  query UserUpdateDrawerQuery($userSlug: Slug!) {
    user(slug: $userSlug) {
      name
      ...UserUpdateFormFragment
    }
  }
`;
