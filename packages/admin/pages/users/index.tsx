import { usePreloadedQuery, graphql, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import UserList from "components/composed/user/UserList";
import {
  useBaseListQueryVars,
  useSearchQueryVars,
  useIsAuthorized,
} from "hooks";
import { LoadingPage } from "components/atomic";
import UnauthorizedMessage from "components/auth/UnauthorizedMessage";
import { usersListQuery as Query } from "@/relay/usersListQuery.graphql";

export default function UserListView() {
  const queryVars = useBaseListQueryVars();
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const _searchVars = useSearchQueryVars();

  const isAuthorized = useIsAuthorized({ actions: ["users.update"] });

  const message = (
    <div className="t-rte">
      <p>
        Your account currently does not have access to this page.
        <br /> Please check with your account manager if you need access to this
        content.
      </p>
    </div>
  );

  if (!isAuthorized) return <UnauthorizedMessage message={message} />;

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
