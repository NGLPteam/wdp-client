import { useTranslation } from "react-i18next";
import { graphql, readInlineData } from "relay-runtime";
import { NamedLink } from "components/atomic";
import { getContributorDisplayName } from "components/composed/contributor/ContributorDisplayName";
import { ContributorsColumnFragment$key } from "@/relay/ContributorsColumnFragment.graphql";
import { UpdatableNode, PartialColumnish } from "./types";
import { getAccessorProps, hasFragments } from "./helpers";
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
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="a-link">{getColumnString()}</a>
      </NamedLink>
    ) : (
      <>{getColumnString()}</>
    )
  ) : null;
}

const ContributorsColumn = <
  T extends UpdatableNode & ContributorsColumnFragment$key,
>(
  props: PartialColumnish<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey, accessorFn } = getAccessorProps<T>(props);

  return {
    header: () => <>{t("lists.contributors_column")}</>,
    id: "contributions",
    enableSorting: false,
    ...(accessorFn
      ? { accessorFn }
      : { accessorKey: accessorKey || "contributions" }),
    cell: ({ getValue }) => {
      const value = getValue<T>();

      return hasFragments(value) ? (
        <ContributorsColumnCell data={value} />
      ) : null;
    },
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
