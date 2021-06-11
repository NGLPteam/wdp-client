import React from "react";
import { graphql } from "react-relay";

import { useVisibleToAuthenticated } from "hooks/useIsAuthenticated";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";

import { UserDebugQuery } from "__generated__/UserDebugQuery.graphql";

export default function UserDebug() {
  const visible = useVisibleToAuthenticated();

  const { data, isLoading } = useAuthenticatedQuery<UserDebugQuery>(query);

  if (!visible) {
    return null;
  }

  if (isLoading) {
    return <p>Loading user info....</p>
  }

  return (
    <>
      <p>Here is some info about your user</p>
      <p>This information is currently fetched directly from the server.</p>
      <dl>
        <dt>Email</dt>
        <dd>{data.viewer.email}</dd>
        <dt>Name</dt>
        <dd>{data.viewer.name}</dd>
      </dl>
    </>
  );
}

const query = graphql`
query UserDebugQuery {
  viewer {
    id
    email
    name
  }
}`;