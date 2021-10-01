import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import { useMaybeFragment, useRouteSlug } from "hooks";
import {
  RoleListFragment,
  RoleListFragment$key,
} from "@/relay/RoleListFragment.graphql";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import { CellProps } from "react-table";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function RoleList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
  header = "navLabels.access",
}: RoleListProps) {
  const roles = useMaybeFragment<RoleListFragment$key>(fragment, data);
  const slug = useRouteSlug();
  const { t } = useTranslation();

  const columns = [
    ModelColumns.ThumbnailColumn<RoleNode>(),
    ModelColumns.StringColumn<RoleNode>({
      Header: <>{t("columns.name")}</>,
      id: "user.name",
    }),
    ModelColumns.StringColumn<RoleNode>({
      Header: <>{t("columns.email")}</>,
      id: "user.email",
    }),
    ModelColumns.StringColumn<RoleNode>({
      Header: <>{t("columns.roles")}</>,
      id: "roles",
      Cell: ({ value }: CellProps<T>) =>
        value.map(({ name }: { name: string }) => name).join(", "),
    }),
  ];

  const buttons = slug ? (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addCommunityMember"
        drawerQuery={{
          drawerSlug: slug,
        }}
        icon="plus"
      >
        {t("actions.add.community.member")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  ) : null;

  // TODO: We need an authorization check here.
  // There are currently no allowedActions around roles.
  return (
    <ModelListPage<T, RoleListFragment, RoleNode>
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

interface RoleListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: RoleListFragment$key;
  header?: string;
}

type RoleNode = RoleListFragment["edges"][number]["node"];

const fragment = graphql`
  fragment RoleListFragment on ContextualPermissionConnection {
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

export default RoleList;
