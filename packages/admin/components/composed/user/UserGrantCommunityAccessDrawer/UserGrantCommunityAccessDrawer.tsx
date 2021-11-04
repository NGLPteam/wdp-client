import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";
import UserGrantCommunityAccessForm from "../UserGrantCommunityAccessForm";
import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import { UserGrantCommunityAccessDrawerQuery as Query } from "@/relay/UserGrantCommunityAccessDrawerQuery.graphql";

// Drawer params required: drawerSlug and drawerEntity
// drawerEntity should be one of three entities: "item" | "collection" | "community"
export default function UserGrantCommunityAccessDrawer({
  dialog,
  params,
}: Props) {
  const { t } = useTranslation();

  const { drawerSlug } = params;

  return drawerSlug ? (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{
        slug: drawerSlug,
      }}
    >
      {({ data }) => (
        <Drawer
          label={t("actions.add.access")}
          header={t("actions.add.access")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          <UserGrantCommunityAccessForm
            onSuccess={dialog.hide}
            onCancel={dialog.hide}
            data={data}
            userId={data?.user?.id}
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

// This fun little query gets the right id and title depending on the entity type.
const query = graphql`
  query UserGrantCommunityAccessDrawerQuery($slug: Slug!) {
    user(slug: $slug) {
      id
      name
    }
    ...UserGrantCommunityAccessFormFragment
  }
`;
