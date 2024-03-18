import { usePreloadedQuery, graphql, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import UserList from "components/composed/user/UserList";
import { useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { LoadingPage } from "components/atomic";
import { usersListQuery as Query } from "@/relay/usersListQuery.graphql";

export default function UserListView() {
  const queryVars = useBaseListQueryVars();
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const _searchVars = useSearchQueryVars();

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={queryVars}
      subscribeIds={["User"]}
      loadingFallback={<LoadingPage />}
    >
      {({ queryRef }) =>
        queryRef ? <ListQuery queryRef={queryRef} /> : <UserList />
      }
    </QueryTransitionWrapper>
  );
}

const ListQuery = ({ queryRef }: { queryRef: PreloadedQuery<Query> }) => {
  const data = usePreloadedQuery<Query>(query, queryRef);

  return data && <UserList data={data} />;
};

const query = graphql`
  query usersListQuery($order: UserOrder, $page: Int!) {
    ...UserListFragment
  }
`;
