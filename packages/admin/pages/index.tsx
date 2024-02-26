import { graphql } from "relay-runtime";
import { QueryWrapper } from "components/api";
import { useBaseListQueryVars, useIsAuthenticated } from "hooks";
import { DashboardLayout } from "components/composed/dashboard";
import { pagesHomeQuery as Query } from "__generated__/pagesHomeQuery.graphql";
import { LoadingPage } from "components/atomic";

export default function Home() {
  const queryVars = useBaseListQueryVars();

  const isAuth = useIsAuthenticated();

  return isAuth ? (
    <QueryWrapper<Query> query={query} initialVariables={queryVars}>
      {({ data }) => (data ? <DashboardLayout data={data} /> : <LoadingPage />)}
    </QueryWrapper>
  ) : null;
}

const query = graphql`
  query pagesHomeQuery($page: Int, $order: EntityOrder) {
    ...DashboardLayoutFragment @arguments(page: $page, order: $order)
  }
`;
