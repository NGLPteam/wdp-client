import React from "react";
import { graphql } from "react-relay";
import { usersQuery as Query } from "__generated__/usersQuery.graphql";
import { QueryWrapper } from "components/api";
import UserList from "components/composed/user/UserList";

export default function UserListView() {
  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ order: "RECENT", page: 1 }}
    >
      {({ data }) => {
        if (!data) return null;
        return <UserList<Query> data={data?.users} />;
      }}
    </QueryWrapper>
  );
}

const query = graphql`
  query usersQuery($order: SimpleOrder!, $page: Int!) {
    users(order: $order, page: $page, perPage: 20) {
      ...UserListFragment
    }
  }
`;
