import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useTranslation } from "react-i18next";
import ModelListPage from "components/composed/model/ModelListPage";
import { useDestroyer, useDrawerHelper } from "hooks";
import {
  ContributorListQuery,
  ContributorListQuery$data,
} from "@/relay/ContributorListQuery.graphql";
import ModelColumns from "components/composed/model/ModelColumns";
import { ButtonControlGroup, ButtonControlDrawer } from "components/atomic";
import PageHeader from "components/layout/PageHeader";
import { getContributorDisplayName } from "../ContributorDisplayName";
import type { ModelTableActionProps } from "@tanstack/react-table";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function ContributorList({
  queryRef,
  headerStyle,
  hideHeader,
}: ContributorListProps) {
  const { t } = useTranslation();
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();

  const { contributors } = usePreloadedQuery<ContributorListQuery>(
    query,
    queryRef
  );

  const columns = [
    ModelColumns.ContributorNameColumn<ContributorNode>(),
    ModelColumns.ContributorAffiliationColumn<ContributorNode>(),
    ModelColumns.ContributorContributionsColumn<ContributorNode>(),
    ModelColumns.CreatedAtColumn<ContributorNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<ContributorNode>) => {
      if (row.original.__typename === "%other") return;
      drawerHelper.open("editContributor", { drawerSlug: row.original.slug });
    },
    handleDelete: ({ row }: ModelTableActionProps<ContributorNode>) => {
      if (row.original.__typename === "%other") return;
      destroy.contributor(
        { contributorId: row.original.id || "" },
        getContributorDisplayName(row.original) || "glossary.collection"
      );
    },
    handleView: ({ row }: ModelTableActionProps<ContributorNode>) =>
      row.original.slug ? `/contributors/${row.original.slug}` : null,
  };

  // TODO: We need an authorization check here. The contributors.create check doesn't
  //  exist yet in the API.
  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer drawer="addPerson" icon="plus">
        {t("actions.create.contributor_person")}
      </ButtonControlDrawer>
      <ButtonControlDrawer drawer="addOrganization" icon="plus">
        {t("actions.create.contributor_organization")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<ContributorListQuery$data["contributors"], ContributorNode>
      modelName="contributor"
      buttons={buttons}
      columns={columns}
      actions={actions}
      data={contributors}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      hideFilters
    />
  );
}

interface ContributorListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  queryRef: PreloadedQuery<ContributorListQuery>;
}

type ContributorNode = ContributorListQuery$data["contributors"]["nodes"][number];

export const query = graphql`
  query ContributorListQuery(
    $order: ContributorOrder
    $page: Int!
    $query: String
  ) {
    contributors(order: $order, page: $page, perPage: 20, prefix: $query) {
      nodes {
        __typename
        ... on OrganizationContributor {
          id
          slug
          legalName
          createdAt
          ...ContributorNameColumnFragment
        }
        ... on PersonContributor {
          id
          slug
          givenName
          familyName
          createdAt
        }
        ...ContributorNameColumnFragment
        ...ContributorAffiliationColumnFragment
        ...ContributorContributionsColumnFragment
      }
      ...ModelListPageFragment
    }
  }
`;

export default ContributorList;
