import { graphql, readInlineData } from "relay-runtime";
import ContributionAuthorBlock from "components/composed/contribution/ContributionAuthorBlock";
import ContributionsBlock from "components/composed/contribution/ContributionsBlock";
import {
  ArticleContributorFragment$data,
  ArticleContributorFragment$key,
} from "@/relay/ArticleContributorFragment.graphql";

export default function ArticleContributor({ data }: Props) {
  const contributionData = readInlineData(fragment, data);

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
  data: ArticleContributorFragment$key | null;
};

type Node = ArticleContributorFragment$data["nodes"][number];

const fragment = graphql`
  fragment ArticleContributorFragment on ItemContributionConnection @inline {
    nodes {
      role
      ...ContributionAuthorBlockFragment
    }
    ...ContributionsBlockFragment
  }
`;
