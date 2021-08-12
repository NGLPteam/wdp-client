import React from "react";
import { graphql } from "react-relay";
import ContributorList from "components/composed/contributor/ContributorList";
import { QueryWrapper } from "components/api";
import { contributorsQuery as Query } from "__generated__/contributorsQuery.graphql";

export default function ContributorListView() {
  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ order: "RECENT", page: 1 }}
    >
      {({ data }) => {
        if (!data) return null;
        return <ContributorList<Query> data={data?.contributors} />;
      }}
    </QueryWrapper>
  );
}

const query = graphql`
  query contributorsQuery($order: SimpleOrder!, $page: Int!) {
    contributors(order: $order, page: $page, perPage: 20) {
      ...ContributorListFragment
    }
  }
`;
