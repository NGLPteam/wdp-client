import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useTranslation } from "react-i18next";
import { useDrawerHelper, useDestroyer } from "hooks";
import ModelListPage from "components/composed/model/ModelListPage";
// import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";
import ModelColumns from "components/composed/model/ModelColumns";
import {
  CommunityListQuery,
  CommunityListQuery$data,
} from "@/relay/CommunityListQuery.graphql";
import type { ModelTableActionProps } from "@tanstack/react-table";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function CommunityList({
  queryRef,
  hideHeader,
  headerStyle,
}: CommunityListProps) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

  const { communities } = usePreloadedQuery<CommunityListQuery>(
    query,
    queryRef
  );

  const columns = [
    ModelColumns.CommunityNameColumn<Node>(),
    ModelColumns.CreatedAtColumn<Node>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<Node>) =>
      drawerHelper.open("editCommunity", {
        drawerSlug: row.original.slug,
      }),
    handleDelete: ({ row }: ModelTableActionProps<Node>) =>
      destroy.community({ communityId: row.original.id }, row.original.name),
    handleView: ({ row }: ModelTableActionProps<Node>) =>
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
    <ModelListPage<CommunityListQuery$data["communities"], Node>
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
  queryRef: PreloadedQuery<CommunityListQuery>;
}

type CommunityNode = CommunityListQuery$data["communities"]["edges"][number]["node"];

type Node = CommunityNode;

export const query = graphql`
  query CommunityListQuery($order: EntityOrder, $page: Int!) {
    communities(order: $order, page: $page, perPage: 20) {
      edges {
        node {
          slug
          id
          createdAt
          updatedAt
          name
          allowedActions
          position
          ...CommunityNameColumnFragment
        }
      }
      ...ModelListPageFragment
    }
  }
`;

export default CommunityList;
