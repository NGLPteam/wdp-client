import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributionAuthorBlock from "components/composed/contribution/ContributionAuthorBlock";
import ContributionsBlock from "components/composed/contribution/ContributionsBlock";
import {
  ArticleContributorFragment$data,
  ArticleContributorFragment$key,
} from "@/relay/ArticleContributorFragment.graphql";

export default function ArticleContributor({ data }: Props) {
  const contributionData = useMaybeFragment(fragment, data);

  const contributions = contributionData?.nodes.filter(
    (node: Node) => node.role && node.role.toLowerCase() === "author",
  );

  return contributions && contributions.length === 1 ? (
    <ContributionAuthorBlock data={contributions[0]} />
  ) : (
    <ContributionsBlock
      header="layouts.authors_header"
      filterRole="author"
      data={contributionData}
    />
  );
}

type Props = {
  data?: ArticleContributorFragment$key | null;
};

type Node = ArticleContributorFragment$data["nodes"][number];

const fragment = graphql`
  fragment ArticleContributorFragment on ItemContributionConnection {
    nodes {
      role
      ...ContributionAuthorBlockFragment
    }
    ...ContributionsBlockFragment
  }
`;
