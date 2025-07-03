import { usePreloadedQuery, graphql, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import UserList from "components/composed/user/UserList";
import { useBaseListQueryVars, useIsAuthorized } from "hooks";
import { LoadingPage } from "components/atomic";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import HtmlHead from "components/global/HtmlHead";
import { usersListQuery as Query } from "@/relay/usersListQuery.graphql";

export default function UserListView() {
  const queryVars = useBaseListQueryVars();

  const isAuthorized = useIsAuthorized({ actions: ["users.update"] });

  if (!isAuthorized)
    return (
      <RouteUnauthorizedMessage i18nKey="messages.unauthorized_body.users" />
    );

  return (
    <>
      <HtmlHead />
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
    </>
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
