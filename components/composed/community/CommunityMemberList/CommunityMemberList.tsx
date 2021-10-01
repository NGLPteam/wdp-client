import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import { useMaybeFragment, useRouteSlug } from "hooks";
import { CommunityMemberListFragment$key } from "@/relay/CommunityMemberListFragment.graphql";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import { CellProps } from "react-table";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";
import {
  CommunityMemberListDataFragment,
  CommunityMemberListDataFragment$key,
} from "@/relay/CommunityMemberListDataFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function CommunityMemberList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
  header = "navLabels.access",
}: CommunityMemberListProps) {
  const community = useMaybeFragment<CommunityMemberListFragment$key>(
    fragment,
    data
  );
  const roles = useMaybeFragment<CommunityMemberListDataFragment$key>(
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
    <ModelListPage<T, CommunityMemberListDataFragment, Node>
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

interface CommunityMemberListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: CommunityMemberListFragment$key | null;
  header?: string;
}

type Node = CommunityMemberListDataFragment["edges"][number]["node"];

const fragment = graphql`
  fragment CommunityMemberListFragment on Entity {
    allowedActions
    assignedUsers(order: USER_NAME_ASC, page: $page, perPage: 20) {
      ...CommunityMemberListDataFragment
    }
  }
`;

const listDataFragment = graphql`
  fragment CommunityMemberListDataFragment on ContextualPermissionConnection {
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

export default CommunityMemberList;
