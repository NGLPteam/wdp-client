import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import UserList from "components/composed/user/UserList";
import { useBaseListQueryVars } from "hooks";
import { query } from "components/composed/user/UserList/UserList";
import { LoadingPage } from "components/atomic";
import { UserListQuery } from "@/relay/UserListQuery.graphql";

export default function UserListView() {
  const queryVars = useBaseListQueryVars();

  return (
    <QueryTransitionWrapper<UserListQuery>
      query={query}
      variables={queryVars}
      subscribeIds={["User"]}
      loadingFallback={<LoadingPage />}
    >
      {({ queryRef }) => queryRef && <UserList queryRef={queryRef} />}
    </QueryTransitionWrapper>
  );
}
