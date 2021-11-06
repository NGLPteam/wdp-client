import { Column } from "react-table";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { UpdatableNode, PartialColumnish } from "./types";
import { useMaybeFragment } from "hooks";
import { NamedLink } from "components/atomic";
import { getContributorDisplayName } from "components/composed/contributor/ContributorDisplayName";
import { ContributorsColumnFragment$key } from "@/relay/ContributorsColumnFragment.graphql";

function ContributorsColumnCell({
  data,
}: {
  data: ContributorsColumnFragment$key;
}) {
  const fragmentData = useMaybeFragment(fragment, data);
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

    return totalString ? `${names} ${totalString}` : names;
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
  NodeType extends UpdatableNode & ContributorsColumnFragment$key
>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    Header: <>{t("lists.contributors_column")}</>,
    id: "contributions",
    disableSortBy: true,
    accessor: (originalRow: NodeType) => {
      return <ContributorsColumnCell data={originalRow} />;
    },
    ...props,
  };
};

export default ContributorsColumn;

const fragment = graphql`
  fragment ContributorsColumnFragment on AnyEntity {
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
