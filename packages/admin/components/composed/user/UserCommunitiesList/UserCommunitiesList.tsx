import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { OperationType } from "relay-runtime";
import type { CellProps, ModelTableActionProps } from "react-table";
import {
  useDestroyer,
  useDrawerHelper,
  useMaybeFragment,
  useRouteSlug,
} from "hooks";
import {
  UserCommunitiesListFragment,
  UserCommunitiesListFragment$data,
  UserCommunitiesListFragment$key,
} from "@/relay/UserCommunitiesListFragment.graphql";
import ModelColumns from "components/composed/model/ModelColumns";
import ModelListPage from "components/composed/model/ModelListPage";
import {
  ButtonControlDrawer,
  ButtonControlGroup,
  NamedLink,
} from "components/atomic";

const UserCommunitiesList = <T extends OperationType>({ data }: Props) => {
  const communities = useMaybeFragment<UserCommunitiesListFragment$key>(
    fragment,
    data
  );

  const { t } = useTranslation();
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();
  const slug = useRouteSlug();

  const columns = [
    ModelColumns.NameColumn<Node>({
      route: "community",
      accessor: "community",
      Cell: ({ row, value }: CellProps<Node>) => {
        if (!row?.original?.community?.slug) return value;
        return (
          <NamedLink
            route="community"
            routeParams={{ slug: row.original.community.slug }}
            passHref
          >
            <a className="t-weight-md a-link">{row.original.community.title}</a>
          </NamedLink>
        );
      },
    }),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("lists.role_column")}</>,
      id: "role",
      accessor: (row: Node) => {
        return row?.role.name;
      },
    }),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<Node>) =>
      drawerHelper.open("editRoleAccess", {
        drawerSlug: row.original.community?.slug || "",
        drawerUserSlug: row.original.user?.slug || "",
        drawerEntity: "community",
        drawerRoleId: row.original.role?.id,
      }),
    handleDelete: ({ row }: ModelTableActionProps<Node>) => {
      const { community, role, user } = row.original;

      if (community && role && user) {
        return destroy.access(
          {
            entityId: community.id,
            roleId: role.id,
            userId: user.id,
          },
          "glossary.access"
        );
      }

      console.warn("No entity, role or user defined.");
    },
  };

  const buttons = slug && (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addUserCommunityAccess"
        drawerQuery={{ drawerSlug: slug }}
        icon="plus"
      >
        {t("actions.add.community")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return communities ? (
    <ModelListPage<T, UserCommunitiesListFragment, Node>
      modelName="role"
      columns={columns}
      data={communities}
      headerStyle="secondary"
      header={t("glossary.community_plural")}
      disableSortBy
      buttons={buttons}
      actions={actions}
    />
  ) : null;
};

interface Props {
  data?: UserCommunitiesListFragment$key | null;
}

type Node = UserCommunitiesListFragment$data["edges"][number]["node"];

const fragment = graphql`
  fragment UserCommunitiesListFragment on UserCommunityAccessGrantConnection {
    edges {
      node {
        id
        community {
          id
          title
          slug
        }
        role {
          id
          name
        }
        user {
          id
          slug
        }
      }
    }
    ...ModelListPageFragment
  }
`;

export default UserCommunitiesList;
