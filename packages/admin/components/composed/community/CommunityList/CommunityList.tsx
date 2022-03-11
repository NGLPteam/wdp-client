import React from "react";
import { OperationType } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import type { ModelTableActionProps } from "react-table";
import {
  CommunityListFragment$key,
  CommunityListFragment,
} from "@/relay/CommunityListFragment.graphql";
import { useMaybeFragment, useDrawerHelper, useDestroyer } from "hooks";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function CommunityList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: CommunityListProps) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

  const communities = useMaybeFragment<CommunityListFragment$key>(
    fragment,
    data
  );

  const columns = [
    ModelColumns.CommunityNameColumn<CommunityNode>(),
    ModelColumns.CreatedAtColumn<CommunityNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<CommunityNode>) =>
      drawerHelper.open("editCommunity", { drawerSlug: row.original.slug }),
    handleDelete: ({ row }: ModelTableActionProps<CommunityNode>) =>
      destroy.community({ communityId: row.original.id }, row.original.name),
    handleView: ({ row }: ModelTableActionProps<CommunityNode>) =>
      row.original.slug ? `/communities/${row.original.slug}` : null,
  };

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer drawer="addCommunity" icon="plus">
        {t("actions.create.community")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<T, CommunityListFragment, CommunityNode>
      modelName="community"
      columns={columns}
      actions={actions}
      data={communities}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      buttons={buttons}
    />
  );
}

interface CommunityListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: CommunityListFragment$key;
}

type CommunityNode = CommunityListFragment["edges"][number]["node"];

const fragment = graphql`
  fragment CommunityListFragment on CommunityConnection {
    edges {
      node {
        slug
        id
        createdAt
        updatedAt
        name
        allowedActions
        ...CommunityNameColumnFragment
      }
    }
    ...ModelListPageFragment
  }
`;

export default CommunityList;
