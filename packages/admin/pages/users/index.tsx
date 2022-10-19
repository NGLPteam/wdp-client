import { graphql } from "react-relay";
import { usersQuery as Query } from "__generated__/usersQuery.graphql";
import { QueryWrapper } from "components/api";
import UserList from "components/composed/user/UserList";
import { useBaseListQueryVars } from "hooks";

export default function UserListView() {
  const queryVars = useBaseListQueryVars();

  return (
    <QueryWrapper<Query> query={query} initialVariables={queryVars}>
      {({ data }) => {
        return <UserList<Query> data={data?.users} />;
      }}
    </QueryWrapper>
  );
}

const query = graphql`
  query usersQuery($order: UserOrder, $page: Int!) {
    users(order: $order, page: $page, perPage: 20) {
      ...UserListFragment
    }
  }
`;
