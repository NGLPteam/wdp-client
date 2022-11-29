import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { contributorsQuery as Query } from "__generated__/contributorsQuery.graphql";
import { useBaseListQueryVars } from "hooks";

import ContributorList from "components/composed/contributor/ContributorList";

export default function ContributorListView() {
  const queryVars = useBaseListQueryVars();

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={queryVars}
      refetchTags={["contributors"]}
    >
      {({ data }) => <ContributorList<Query> data={data?.contributors} />}
    </QueryWrapper>
  );
}

const query = graphql`
  query contributorsQuery($order: ContributorOrder, $page: Int!) {
    contributors(order: $order, page: $page, perPage: 20) {
      ...ContributorListFragment
    }
  }
`;
