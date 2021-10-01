import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import { useMaybeFragment, useRouteSlug } from "hooks";
import { ItemAccessListFragment$key } from "@/relay/ItemAccessListFragment.graphql";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import { CellProps } from "react-table";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";
import {
  ItemAccessListDataFragment,
  ItemAccessListDataFragment$key,
} from "@/relay/ItemAccessListDataFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function ItemAccessList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
  header = "navLabels.access",
}: ItemAccessListProps) {
  const community = useMaybeFragment<ItemAccessListFragment$key>(
    fragment,
    data
  );
  const roles = useMaybeFragment<ItemAccessListDataFragment$key>(
    listDataFragment,
    community?.assignedUsers
  );

  const slug = useRouteSlug();
  const { t } = useTranslation();

  const columns = [
    ModelColumns.ThumbnailColumn<Node>(),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("columns.name")}</>,
      id: "user.name",
    }),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("columns.email")}</>,
      id: "user.email",
    }),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("columns.roles")}</>,
      id: "roles",
      Cell: ({ value }: CellProps<T>) =>
        value.map(({ name }: { name: string }) => name).join(", "),
    }),
  ];

  // TODO: Check allowedActions here to see if the user can add a member
  // Currently there are no permissions around roles
  const buttons = slug ? (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addItemAccess"
        drawerQuery={{
          drawerSlug: slug,
        }}
        icon="plus"
      >
        {t("actions.add.access")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  ) : null;

  // TODO: We need an authorization check here.
  // There are currently no allowedActions around roles.
  return (
    <ModelListPage<T, ItemAccessListDataFragment, Node>
      modelName="role"
      columns={columns}
      data={roles}
      header={t(header)}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      buttons={buttons}
    />
  );
}

interface ItemAccessListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: ItemAccessListFragment$key | null;
  header?: string;
}

type Node = ItemAccessListDataFragment["edges"][number]["node"];

const fragment = graphql`
  fragment ItemAccessListFragment on Entity {
    allowedActions
    assignedUsers(order: USER_NAME_ASC, page: $page, perPage: 20) {
      ...ItemAccessListDataFragment
    }
  }
`;

const listDataFragment = graphql`
  fragment ItemAccessListDataFragment on ContextualPermissionConnection {
    edges {
      node {
        id
        roles {
          name
        }
        user {
          name
          email
        }
      }
    }
    ...ModelListPageFragment
  }
`;

export default ItemAccessList;
