import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { OperationType } from "relay-runtime";
import type { CellContext, ModelTableActionProps } from "@tanstack/react-table";
import {
  useDestroyer,
  useDrawerHelper,
  useMaybeFragment,
  useRouteSlug,
} from "hooks";
import {
  UserItemsListFragment,
  UserItemsListFragment$data,
  UserItemsListFragment$key,
} from "@/relay/UserItemsListFragment.graphql";
import ModelColumns from "components/composed/model/ModelColumns";
import ModelListPage from "components/composed/model/ModelListPage";
import {
  ButtonControlDrawer,
  ButtonControlGroup,
  NamedLink,
} from "components/atomic";

const UserItemsList = <T extends OperationType>({ data }: Props) => {
  const communities = useMaybeFragment<UserItemsListFragment$key>(
    fragment,
    data
  );

  const { t } = useTranslation();
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();
  const slug = useRouteSlug();

  const columns = [
    ModelColumns.EntityThumbnailColumn<Node>({
      // Return the data that contains the thumbnail fragment
      accessorFn: (originalRow: Node) => originalRow?.item,
    }),
    ModelColumns.NameColumn<Node>({
      route: "item",
      accessorKey: "item",
      cell: ({ row, value }: CellContext<Node, unknown>) => {
        if (!row?.original?.item?.slug) return value;
        return (
          <NamedLink
            route="item"
            routeParams={{ slug: row.original.item.slug }}
            passHref
          >
            <a className="t-weight-md a-link">{row.original.item.title}</a>
          </NamedLink>
        );
      },
    }),
    ModelColumns.StringColumn<Node>({
      header: () => <>{t("lists.role_column")}</>,
      id: "role",
      accessorFn: (row: Node) => {
        return row?.role.name;
      },
    }),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<Node>) =>
      drawerHelper.open("editRoleAccess", {
        drawerSlug: row.original.item?.slug || "",
        drawerUserSlug: row.original.user?.slug || "",
        drawerEntity: "item",
        drawerRoleId: row.original.role?.id,
      }),
    handleDelete: ({ row }: ModelTableActionProps<Node>) => {
      const { item, role, user } = row.original;

      if (item && role && user) {
        return destroy.access(
          {
            entityId: item.id,
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
        drawer="addUserItemAccess"
        drawerQuery={{ drawerSlug: slug, drawerEntity: "item" }}
        icon="plus"
      >
        {t("actions.add.item")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return communities ? (
    <ModelListPage<T, UserItemsListFragment, Node>
      modelName="role"
      columns={columns}
      data={communities}
      headerStyle="secondary"
      header={t("glossary.item_plural")}
      disableSortBy
      buttons={buttons}
      actions={actions}
    />
  ) : null;
};

interface Props {
  data?: UserItemsListFragment$key | null;
}

type Node = UserItemsListFragment$data["edges"][number]["node"];

const fragment = graphql`
  fragment UserItemsListFragment on UserItemAccessGrantConnection {
    edges {
      node {
        id
        item {
          id
          title
          slug
          ...EntityThumbnailColumnFragment
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

export default UserItemsList;
