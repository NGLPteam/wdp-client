import React from "react";
import { graphql } from "react-relay";
import type { OperationType } from "relay-runtime";
import type { ModelTableActionProps } from "react-table";
import { CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import CreateContributionButton from "../CreateContributionButton";
import type {
  CollectionContributionListFragment,
  CollectionContributionListFragment$key,
} from "@/relay/CollectionContributionListFragment.graphql";
import {
  useMaybeFragment,
  useDestroyer,
  useDrawerHelper,
  useRouteSlug,
} from "hooks";

import { ButtonControlGroup, NamedLink } from "components/atomic";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function CollectionContributionList<T extends OperationType>({
  data,
  headerStyle,
  nameColumn = "collection",
  hideHeader,
}: CollectionContributionListProps) {
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();
  const slug = useRouteSlug();
  const { t } = useTranslation();

  const onContributor = nameColumn !== "contributor";

  /* eslint-disable max-len */
  const collectionContributions =
    useMaybeFragment<CollectionContributionListFragment$key>(fragment, data);
  /* eslint-enable max-len */

  const collectionNameColumn = {
    Header: "Name",
    id: "targetTitle",
    accessor: (row: CollectionContributionNode) => {
      return row?.collection?.title;
    },
    Cell: ({ row, value }: CellProps<CollectionContributionNode>) => {
      return (
        <NamedLink
          route="collection"
          routeParams={{ slug: row.original.collection.slug }}
          passHref
        >
          <a className="t-weight-md a-link">{value}</a>
        </NamedLink>
      );
    },
  };

  const contributorNameColumn =
    ModelColumns.ContributorNameColumn<CollectionContributionNode>({
      accessor: (row: CollectionContributionNode) => {
        return row?.contributor;
      },
    });

  const columns = [
    nameColumn === "collection" ? collectionNameColumn : contributorNameColumn,
    ModelColumns.StringColumn<CollectionContributionNode>({
      Header: <>{t("lists.role_column")}</>,
      id: "role",
    }),
    ModelColumns.CreatedAtColumn<CollectionContributionNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<CollectionContributionNode>) =>
      drawerHelper.open("editCollectionContribution", {
        drawerSlug: row.original.slug,
      }),
    handleDelete: ({
      row,
    }: ModelTableActionProps<CollectionContributionNode>) =>
      destroy.contribution(
        { contributionId: row.original.id },
        "glossary.contribution"
      ),
  };

  // TODO: We need an authorization check here. The contributors.create check doesn't
  //  exist yet in the API.
  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <CreateContributionButton
        type="collection"
        parentSlug={slug}
        onContributor={onContributor}
      />
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<
      T,
      CollectionContributionListFragment,
      CollectionContributionNode
    >
      modelName={
        onContributor ? "collection_contribution" : "collection_contributor"
      }
      columns={columns}
      actions={actions}
      buttons={buttons}
      data={collectionContributions}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

interface CollectionContributionListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: CollectionContributionListFragment$key;
  nameColumn?: "collection" | "contributor";
}

type CollectionContributionNode =
  CollectionContributionListFragment["nodes"][number];

const fragment = graphql`
  fragment CollectionContributionListFragment on CollectionContributionConnection {
    nodes {
      id
      slug
      createdAt
      updatedAt
      role
      contributor {
        __typename
        ... on OrganizationContributor {
          slug
          legalName
        }
        ... on PersonContributor {
          slug
          givenName
          familyName
        }
        ...ContributorNameColumnFragment
      }
      collection {
        title
        slug
      }
    }
    ...ModelListPageFragment
  }
`;

export default CollectionContributionList;
