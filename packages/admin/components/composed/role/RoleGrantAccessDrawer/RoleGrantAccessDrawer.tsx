import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";

import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import RoleGrantAccessForm from "components/composed/role/RoleGrantAccessForm";
import {
  RoleGrantAccessDrawerQuery as Query,
  RoleGrantAccessDrawerQueryResponse as Response,
} from "@/relay/RoleGrantAccessDrawerQuery.graphql";

// Drawer params required: drawerSlug and drawerEntity
// drawerEntity should be one of three entities: "item" | "collection" | "community"
export default function RoleGrantAccessDrawer({ dialog, params }: Props) {
  const { t } = useTranslation();

  const { drawerSlug, drawerEntity } = params;

  function getDrawerHeader(data?: Response | null) {
    const i18nKey =
      drawerEntity === "community"
        ? "actions.add.member"
        : "actions.add.access";

    const header =
      drawerEntity === "community"
        ? data?.community?.title
        : drawerEntity === "collection"
        ? data?.collection?.title
        : data?.item?.title;

    return header
      ? t(`${i18nKey}_header`, {
          name: header,
        })
      : t(i18nKey);
  }

  function getEntityId(data?: Response | null) {
    return drawerEntity === "community"
      ? data?.community?.id
      : drawerEntity === "collection"
      ? data?.collection?.id
      : data?.item?.id;
  }

  return drawerSlug && drawerEntity ? (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{
        slug: drawerSlug,
        onCommunity: drawerEntity === "community",
        onCollection: drawerEntity === "collection",
        onItem: drawerEntity === "item",
      }}
    >
      {({ data }) => (
        <Drawer
          label={t(
            drawerEntity === "community"
              ? "actions.add.member"
              : "actions.add.access"
          )}
          header={getDrawerHeader(data)}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          <RoleGrantAccessForm
            onSuccess={dialog.hide}
            onCancel={dialog.hide}
            entityId={getEntityId(data)}
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

// This fun little query gets the right id and title depending on the entity type.
const query = graphql`
  query RoleGrantAccessDrawerQuery(
    $slug: Slug!
    $onCommunity: Boolean!
    $onCollection: Boolean!
    $onItem: Boolean!
  ) {
    community(slug: $slug) @include(if: $onCommunity) {
      id
      title
    }
    collection(slug: $slug) @include(if: $onCollection) {
      id
      title
    }
    item(slug: $slug) @include(if: $onItem) {
      id
      title
    }
    ...RoleGrantAccessFormFragment
  }
`;
