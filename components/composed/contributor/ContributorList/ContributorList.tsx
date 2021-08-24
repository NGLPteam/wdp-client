import React from "react";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import {
  ContributorListFragment,
  ContributorListFragment$key,
} from "@/relay/ContributorListFragment.graphql";
import { graphql, useFragment } from "react-relay";
import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import type { ModelTableActionProps } from "react-table";
import { useTranslation } from "react-i18next";
import { DrawerLink, ButtonControl } from "components/atomic";

interface ContributorListProps {
  data: ContributorListFragment$key;
}

type ContributorNode = ContributorListFragment["nodes"][number];

function ContributorList<T extends OperationType>({
  data,
}: ContributorListProps) {
  const { t } = useTranslation("common");

  const columns = [
    ModelColumns.NameColumn<ContributorNode>({
      route: "contributor",
      id: "name",
      accessor: (row) => {
        if (row.__typename === "OrganizationContributor") {
          return row.name;
        }
        if (row.__typename === "PersonContributor") {
          return `${row.firstName} ${row.lastName}`;
        }
        return "";
      },
    }),
    ModelColumns.CreatedAtColumn<ContributorNode>(),
    ModelColumns.UpdatedAtColumn<ContributorNode>(),
  ];

  /* eslint-disable no-console */
  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<ContributorNode>) => {
      if (row.original.__typename === "%other") return;
      console.info(`edit ${row.original.slug}`);
    },
    handleDelete: ({ row }: ModelTableActionProps<ContributorNode>) => {
      if (row.original.__typename === "%other") return;
      console.info(`delete ${row.original.slug}`);
    },
  };
  /* eslint-enable no-console */

  // TODO: We need an authorization check here. The contributors.create check doesn't
  //  exist yet in the API.
  const buttons = (
    <div className="l-flex l-flex--gap">
      <DrawerLink drawer="addPerson" passHref>
        <ButtonControl as="a" icon="plus">
          {t("actions.create.contributor.person")}
        </ButtonControl>
      </DrawerLink>
      <DrawerLink drawer="addOrganization" passHref>
        <ButtonControl as="a" icon="plus">
          {t("actions.create.contributor.organization")}
        </ButtonControl>
      </DrawerLink>
    </div>
  );

  const contributors = useFragment<ContributorListFragment$key>(fragment, data);
  return (
    <ModelListPage<T, ContributorListFragment, ContributorNode>
      modelName="contributor"
      buttons={buttons}
      columns={columns}
      actions={actions}
      viewOptions={[DataViewOptions.table]}
      data={contributors}
    />
  );
}

const fragment = graphql`
  fragment ContributorListFragment on AnyContributorConnection {
    nodes {
      __typename
      ... on OrganizationContributor {
        slug
        name: legalName
        createdAt
        updatedAt
      }
      ... on PersonContributor {
        slug
        firstName: givenName
        lastName: familyName
        createdAt
        updatedAt
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default ContributorList;
