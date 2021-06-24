import React, { useState } from "react";
import { graphql } from "react-relay";
import {
  UserListQuery,
  UserListQueryVariables,
} from "__generated__/UserListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader } from "components/layout";
import { Card, CardList } from "components/layout/CardList/CardList";
import Link from "next/link";
import { FullPageLoader } from "components/global";
import UserHeaders from "./UserHeadersPartial";

export default function UserList() {
  const [variables, setVariables] = useState<Variables>({
    order: "RECENT",
  });

  const { data, error, isLoading } = useAuthenticatedQuery<UserListQuery>(
    query,
    variables
  );

  if (isLoading) {
    return null;
  }

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      <PageHeader title="Users" />
      <CardList>
        <UserHeaders variables={variables} setVariables={setVariables} />
        {data?.users?.nodes ? (
          data.users.nodes.map((user, index) => (
            <Card key={index}>
              <h4>
                <Link href={`/users/${user.slug}`}>{user.name}</Link>
              </h4>
            </Card>
          ))
        ) : data?.users === null ? (
          <div>No Users.</div>
        ) : (
          <FullPageLoader />
        )}
      </CardList>
    </section>
  );
}

export interface Variables extends UserListQueryVariables {
  order: "RECENT" | "OLDEST";
}

// TODO: make breadcrumbs into a fragment to live within breadcrumbs
const query = graphql`
  query UserListQuery($order: SimpleOrder!) {
    users(order: $order) {
      nodes {
        email
        name
        slug
      }
    }
  }
`;
