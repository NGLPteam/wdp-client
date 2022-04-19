import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";

import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import RoleEditAccessForm from "components/composed/role/RoleEditAccessForm";
import {
  RoleEditAccessDrawerQuery as Query,
  RoleEditAccessDrawerQueryResponse as Response,
  RoleEditAccessDrawerQueryResponse,
} from "@/relay/RoleEditAccessDrawerQuery.graphql";
import { useDestroyer } from "hooks";
import DrawerActions from "components/layout/Drawer/DrawerActions";

// Drawer params required: drawerSlug and drawerEntity
// drawerEntity should be one of three entities: "item" | "collection" | "community"
export default function RoleEditAccessDrawer({ dialog, params }: Props) {
  const { t } = useTranslation();
  const destroy = useDestroyer();

  const { drawerSlug, drawerUserSlug, drawerEntity, drawerRoleId } = params;

  function getDrawerHeader(data?: Response | null) {
    const i18nKey =
      drawerEntity === "community"
        ? "actions.edit.member"
        : "actions.edit.access";

    const header =
      drawerEntity === "community"
        ? data?.community?.title
        : drawerEntity === "collection"
        ? data?.collection?.title
        : data?.item?.title;

    return header
      ? t(`${i18nKey}_title`, {
          name: header,
          user: data?.user?.name,
        })
      : t(i18nKey);
  }

  function getEntityData(data?: Response | null): EntityData {
    return drawerEntity === "community"
      ? data?.community
      : drawerEntity === "collection"
      ? data?.collection
      : data?.item;
  }

  function getEntityId(data?: Response | null) {
    const entity = getEntityData(data);

    return entity?.id;
  }

  /* Render route and delete buttons */
  function renderButtons(data?: Response | null) {
    if (!data) return;

    const entityId = getEntityId(data);

    const userId = data?.user?.id;

    /* Delete button */
    if (!entityId || !userId || !drawerRoleId) return;

    const handleDelete = () => {
      destroy.access(
        { entityId, roleId: drawerRoleId, userId },
        data?.user?.name || t("glossary.user")
      );
      if (dialog?.hide) dialog.hide();
    };

    return <DrawerActions handleDelete={handleDelete} />;
  }

  return drawerSlug && drawerUserSlug && drawerEntity && drawerRoleId ? (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{
        slug: drawerSlug,
        userSlug: drawerUserSlug,
        onCommunity: drawerEntity === "community",
        onCollection: drawerEntity === "collection",
        onItem: drawerEntity === "item",
      }}
    >
      {({ data }) => (
        <Drawer
          label={t(
            drawerEntity === "community"
              ? "actions.edit.member"
              : "actions.edit.access"
          )}
          header={getDrawerHeader(data)}
          dialog={dialog}
          hideOnClickOutside={false}
          buttons={renderButtons(data)}
        >
          <RoleEditAccessForm
            onSuccess={dialog.hide}
            onCancel={dialog.hide}
            entityId={getEntityId(data)}
            roleId={drawerRoleId}
            userId={data?.user?.id}
            data={getEntityData(data)}
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

type EntityData =
  | RoleEditAccessDrawerQueryResponse["community"]
  | RoleEditAccessDrawerQueryResponse["collection"]
  | RoleEditAccessDrawerQueryResponse["item"];

// This fun little query gets the right id and title depending on the entity type.
const query = graphql`
  query RoleEditAccessDrawerQuery(
    $slug: Slug!
    $userSlug: Slug!
    $onCommunity: Boolean!
    $onCollection: Boolean!
    $onItem: Boolean!
  ) {
    community(slug: $slug) @include(if: $onCommunity) {
      id
      title
      ...RoleEditAccessFormFragment
    }
    collection(slug: $slug) @include(if: $onCollection) {
      id
      title
      ...RoleEditAccessFormFragment
    }
    item(slug: $slug) @include(if: $onItem) {
      id
      title
      ...RoleEditAccessFormFragment
    }
    user(slug: $userSlug) {
      id
      name
    }
  }
`;
