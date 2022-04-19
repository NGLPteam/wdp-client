import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useIsAuthenticated } from "hooks";
import SearchLayoutQuery from "components/composed/search/SearchLayoutQuery";
import { searchQuery as Query } from "__generated__/searchQuery.graphql";
import { LoadingPage } from "components/atomic/loading/LoadingPage/LoadingPage.styles";

export default function Search() {
  const isAuth = useIsAuthenticated();

  return isAuth ? (
    <QueryWrapper<Query> query={query}>
      {({ data }) =>
        data ? <SearchLayoutQuery data={data} /> : <LoadingPage />
      }
    </QueryWrapper>
  ) : null;
}

const query = graphql`
  query searchQuery {
    ...SearchLayoutQueryFragment
  }
`;
