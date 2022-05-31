import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";
import UserProfileUpdateForm from "../UserProfileUpdateForm";
import { useDrawerHelper, useIsAuthenticated } from "hooks";
import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import { UserProfileUpdateDrawerQuery as Query } from "@/relay/UserProfileUpdateDrawerQuery.graphql";

export default function UserProfileUpdateDrawer({ dialog }: Props) {
  const drawerHelper = useDrawerHelper();
  const { t } = useTranslation();
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    drawerHelper.close();
    return null;
  }

  return (
    <QueryWrapper<Query> query={query}>
      {({ data }) => (
        <Drawer
          header={t("actions.edit.profile_header")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          {data && data.viewer && (
            <UserProfileUpdateForm
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
              data={data.viewer}
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
  query UserProfileUpdateDrawerQuery {
    viewer {
      name
      ...UserProfileUpdateFormFragment
    }
  }
`;
