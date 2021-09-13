import React from "react";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import {
  ContributorListFragment,
  ContributorListFragment$key,
} from "@/relay/ContributorListFragment.graphql";
import { graphql } from "react-relay";
import type { ModelTableActionProps } from "react-table";
import { useTranslation } from "react-i18next";
import { useMaybeFragment, useDestroyer, useDrawerHelper } from "hooks";

import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import { DrawerLink, ButtonControl } from "components/atomic";
import { getContributorDisplayName } from "../ContributorDisplayName";

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
    ModelColumns.ThumbnailColumn<ContributorNode>({
      accessor: (row) => {
        if (row.__typename === "%other") return null;
        return row?.image?.thumb;
      },
    }),
    ModelColumns.NameColumn<ContributorNode>({
      route: "contributor",
      id: "name",
      accessor: (row) => getContributorDisplayName(row),
    }),
    ModelColumns.CreatedAtColumn<ContributorNode>(),
    ModelColumns.UpdatedAtColumn<ContributorNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<ContributorNode>) => {
      if (row.original.__typename === "%other") return;
      drawerHelper.open("editContributor", { drawerSlug: row.original.slug });
    },
    handleDelete: ({ row }: ModelTableActionProps<ContributorNode>) => {
      if (row.original.__typename === "%other") return;
      destroy.contributor(
        { contributorId: row.original.id },
        getContributorDisplayName(row.original) || "glossary.collection"
      );
    },
  };

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

  return (
    <ModelListPage<T, ContributorListFragment, ContributorNode>
      modelName="contributor"
      buttons={buttons}
      columns={columns}
      actions={actions}
      viewOptions={[DataViewOptions.table]}
      data={contributors}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

interface ContributorListProps {
  data?: ContributorListFragment$key;
  headerStyle?: "primary" | "secondary";
  hideHeader?: boolean;
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
        updatedAt
        image {
          alt
          thumb {
            dimensions
            png {
              url
            }
          }
        }
      }
      ... on PersonContributor {
        id
        slug
        givenName
        familyName
        createdAt
        updatedAt
        image {
          alt
          thumb {
            dimensions
            png {
              url
            }
          }
        }
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default ContributorList;
