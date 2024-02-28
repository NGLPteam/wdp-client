import { useTranslation } from "react-i18next";
import { graphql, readInlineData } from "relay-runtime";
import { NamedLink } from "components/atomic";
import { getContributorDisplayName } from "components/composed/contributor/ContributorDisplayName";
import { ContributorsColumnFragment$key } from "@/relay/ContributorsColumnFragment.graphql";
import { UpdatableNode, PartialColumnish } from "./types";
import type { ColumnDef } from "@tanstack/react-table";

function ContributorsColumnCell({
  data,
}: {
  data: ContributorsColumnFragment$key;
}) {
  const fragmentData = readInlineData(fragment, data);
  const { t } = useTranslation();

  function getColumnString() {
    const names = fragmentData?.contributions?.edges
      ? fragmentData?.contributions.edges
          .map((c) => getContributorDisplayName(c.node.contributor))
          .join(",")
      : null;

    const total = fragmentData?.contributions?.pageInfo.totalCount;
    const totalString =
      total && total > 1 ? t("common.and_x_more", { count: total - 1 }) : null;

    return totalString ? `${names}${totalString}` : names;
  }

  return fragmentData ? (
    fragmentData?.slug ? (
      <NamedLink
        route="item.manage.contributions"
        routeParams={{ slug: fragmentData.slug }}
        passHref
      >
        <a className="a-link">{getColumnString()}</a>
      </NamedLink>
    ) : (
      <>{getColumnString()}</>
    )
  ) : null;
}

const ContributorsColumn = <
  NodeType extends UpdatableNode & ContributorsColumnFragment$key,
>(
  props: PartialColumnish<NodeType> = {},
): ColumnDef<NodeType> => {
  const { t } = useTranslation();

  return {
    header: () => <>{t("lists.contributors_column")}</>,
    id: "contributions",
    enableSorting: false,
    accessorKey: "contributions",
    cell: ({ row }) => <ContributorsColumnCell data={row.original} />,
    ...props,
  };
};

export default ContributorsColumn;

const fragment = graphql`
  fragment ContributorsColumnFragment on AnyEntity @inline {
    ... on Item {
      slug
      contributions(page: 1, perPage: 1) {
        edges {
          node {
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
          }
        }
        pageInfo {
          totalCount
        }
      }
    }
  }
`;
