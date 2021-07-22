import React from "react";
import { graphql } from "react-relay";
import { CommunityLayoutQuery } from "@/relay/CommunityLayoutQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { ModelHeader } from "components/composed/model";
import { useRouter } from "next/router";
import { routeQueryArrayToString } from "helpers";

export default function CommunityLayout({ children }) {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data,
    error,
    isLoading,
  } = useAuthenticatedQuery<CommunityLayoutQuery>(query, {
    slug: routeQueryArrayToString(slug),
  });

  if (isLoading) {
    return null;
  }

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      {data && data.community && (
        <ModelHeader type="COMMUNITY" title={data.community.name} />
      )}

      {children}
    </section>
  );
}

const query = graphql`
  query CommunityLayoutQuery($slug: Slug!) {
    community(slug: $slug) {
      name
      slug
    }
  }
`;
