import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import type { ModelTableActionProps } from "react-table";
import { CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import {
  ItemContributionListFragment,
  ItemContributionListFragment$key,
} from "@/relay/ItemContributionListFragment.graphql";
import {
  useMaybeFragment,
  useDestroyer,
  useDrawerHelper,
  useRouteSlug,
} from "hooks";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import {
  ButtonControlGroup,
  NamedLink,
  ButtonControlDrawer,
} from "components/atomic";
import GetContributorDisplayName from "components/composed/contributor/ContributorDisplayName/ContributorDisplayName";
import PageHeader from "components/layout/PageHeader";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function ItemContributionList<T extends OperationType>({
  data,
  headerStyle,
  nameColumn = "item",
  hideHeader,
}: ItemContributionListProps) {
  const itemContributions = useMaybeFragment<ItemContributionListFragment$key>(
    fragment,
    data
  );
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();
  const slug = useRouteSlug();
  const { t } = useTranslation();

  const collectionNameColumn = {
    Header: "Name",
    id: "Name",
    disableSortBy: true,
    accessor: (row: ItemContributionNode) => {
      return row?.item?.title;
    },
    Cell: ({ row, value }: CellProps<ItemContributionNode>) => {
      return (
        <NamedLink
          route="item"
          routeParams={{ slug: row.original.item.slug }}
          passHref
        >
          <a className="t-weight-md a-link">{value}</a>
        </NamedLink>
      );
    },
  };

  const contributorNameColumn = {
    Header: "Name",
    id: "Name",
    disableSortBy: true,
    accessor: (row: ItemContributionNode) => {
      return row?.contributor;
    },
    Cell: ({ row }: CellProps<ItemContributionNode>) => {
      if (row?.original.contributor.__typename === "%other") return null;

      return (
        <NamedLink
          route="contributor"
          routeParams={{ slug: row.original.contributor.slug }}
          passHref
        >
          <a className="t-weight-md a-link">
            <GetContributorDisplayName contributor={row.original.contributor} />
          </a>
        </NamedLink>
      );
    },
  };

  const columns = [
    nameColumn === "item" ? collectionNameColumn : contributorNameColumn,
    ModelColumns.StringColumn<ItemContributionNode>({
      Header: <>{t("lists.role_column")}</>,
      id: "role",
    }),
    ModelColumns.CreatedAtColumn<ItemContributionNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<ItemContributionNode>) =>
      drawerHelper.open("editItemContribution", {
        drawerSlug: row.original.slug,
      }),
    handleDelete: ({ row }: ModelTableActionProps<ItemContributionNode>) =>
      destroy.contribution(
        { contributionId: row.original.id },
        "glossary.contribution"
      ),
  };

  // Only pass the slug if we're in Item details
  const drawerQuery = {
    drawerSlug: slug || "",
    drawerContributionType: "item",
  };

  const drawer =
    nameColumn === "contributor"
      ? "addItemContribution"
      : "addContributorContribution";

  // TODO: We need an authorization check here. The contributors.create check doesn't
  //  exist yet in the API.
  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        icon="plus"
        drawer={drawer}
        drawerQuery={drawerQuery}
      >
        {t("actions.create.contribution")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<T, ItemContributionListFragment, ItemContributionNode>
      modelName="item_contribution"
      columns={columns}
      actions={actions}
      buttons={buttons}
      data={itemContributions}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

interface ItemContributionListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: ItemContributionListFragment$key;
  nameColumn?: "item" | "contributor";
}

type ItemContributionNode = ItemContributionListFragment["nodes"][number];

const fragment = graphql`
  fragment ItemContributionListFragment on ItemContributionConnection {
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
      }
      item {
        slug
        title
      }
    }
    ...ModelListPageFragment
  }
`;

export default ItemContributionList;
