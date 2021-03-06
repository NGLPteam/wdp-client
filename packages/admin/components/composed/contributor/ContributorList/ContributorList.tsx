import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import type { ModelTableActionProps } from "react-table";
import { useTranslation } from "react-i18next";
import { getContributorDisplayName } from "../ContributorDisplayName";
import ModelListPage from "components/composed/model/ModelListPage";
import {
  ContributorListFragment,
  ContributorListFragment$key,
} from "@/relay/ContributorListFragment.graphql";
import { useMaybeFragment, useDestroyer, useDrawerHelper } from "hooks";

import ModelColumns from "components/composed/model/ModelColumns";
import { ButtonControlGroup, ButtonControlDrawer } from "components/atomic";
import PageHeader from "components/layout/PageHeader";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function ContributorList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: ContributorListProps) {
  const { t } = useTranslation();
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();

  const contributors = useMaybeFragment(fragment, data);

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
    <ModelListPage<T, ContributorListFragment, ContributorNode>
      modelName="contributor"
      buttons={buttons}
      columns={columns}
      actions={actions}
      data={contributors}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

interface ContributorListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: ContributorListFragment$key;
}

type ContributorNode = ContributorListFragment["nodes"][number];

const fragment = graphql`
  fragment ContributorListFragment on AnyContributorConnection {
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
`;

export default ContributorList;
