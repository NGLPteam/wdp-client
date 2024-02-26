import { graphql } from "relay-runtime";
import { QueryWrapper } from "components/api";
import { contributorsQuery as Query } from "__generated__/contributorsQuery.graphql";
import { useContributorQueryVars } from "hooks";

import ContributorList from "components/composed/contributor/ContributorList";

export default function ContributorListView() {
  const contributorSearchVars = useContributorQueryVars();

  return (
    <QueryWrapper<Query>
      query={query}
      refetchTags={["contributors"]}
      initialVariables={{ ...contributorSearchVars }}
    >
      {({ data }) => <ContributorList<Query> data={data?.contributors} />}
    </QueryWrapper>
  );
}

const query = graphql`
  query contributorsQuery(
    $order: ContributorOrder
    $page: Int!
    $query: String
  ) {
    contributors(order: $order, page: $page, perPage: 20, prefix: $query) {
      ...ContributorListFragment
    }
  }
`;
