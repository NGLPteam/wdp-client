import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import { useMaybeFragment, useRouteSlug } from "hooks";
import { CollectionAccessListFragment$key } from "@/relay/CollectionAccessListFragment.graphql";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import { CellProps } from "react-table";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";
import {
  CollectionAccessListDataFragment,
  CollectionAccessListDataFragment$key,
} from "@/relay/CollectionAccessListDataFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function CollectionAccessList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
  header = "navLabels.access",
}: CollectionAccessListProps) {
  const community = useMaybeFragment<CollectionAccessListFragment$key>(
    fragment,
    data
  );
  const roles = useMaybeFragment<CollectionAccessListDataFragment$key>(
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
        drawer="addCollectionAccess"
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
    <ModelListPage<T, CollectionAccessListDataFragment, Node>
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

interface CollectionAccessListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: CollectionAccessListFragment$key | null;
  header?: string;
}

type Node = CollectionAccessListDataFragment["edges"][number]["node"];

const fragment = graphql`
  fragment CollectionAccessListFragment on Entity {
    allowedActions
    assignedUsers(order: USER_NAME_ASC, page: $page, perPage: 20) {
      ...CollectionAccessListDataFragment
    }
  }
`;

const listDataFragment = graphql`
  fragment CollectionAccessListDataFragment on ContextualPermissionConnection {
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

export default CollectionAccessList;
