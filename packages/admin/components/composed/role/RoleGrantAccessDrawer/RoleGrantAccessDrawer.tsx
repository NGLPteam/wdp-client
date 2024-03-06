import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import RoleGrantAccessForm from "components/composed/role/RoleGrantAccessForm";
import {
  RoleGrantAccessDrawerQuery as Query,
  RoleGrantAccessDrawerQuery$data as Response,
  RoleGrantAccessDrawerQuery$data,
} from "@/relay/RoleGrantAccessDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

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

  function getEntityData(data?: Response | null): EntityData {
    return drawerEntity === "community"
      ? data?.community
      : drawerEntity === "collection"
      ? data?.collection
      : data?.item;
  }

  function getEntityId(data?: Response | null) {
    return getEntityData(data)?.id;
  }

  return drawerSlug && drawerEntity ? (
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{
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
            rolesData={getEntityData(data)}
          />
        </Drawer>
      )}
    </LazyLoadQueryWrapper>
  ) : null;
}

interface Props {
  dialog: DialogProps;
  params: Record<string, string | undefined | null>;
}

type EntityData =
  | RoleGrantAccessDrawerQuery$data["community"]
  | RoleGrantAccessDrawerQuery$data["collection"]
  | RoleGrantAccessDrawerQuery$data["item"];

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
      ...RoleGrantAccessFormRolesFragment
    }
    collection(slug: $slug) @include(if: $onCollection) {
      id
      title
      ...RoleGrantAccessFormRolesFragment
    }
    item(slug: $slug) @include(if: $onItem) {
      id
      title
      ...RoleGrantAccessFormRolesFragment
    }
  }
`;
