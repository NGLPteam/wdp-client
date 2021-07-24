import React from "react";
import { graphql } from "react-relay";
import { CommunityLayoutQuery } from "@/relay/CommunityLayoutQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader } from "components/layout";
import { useRouter } from "next/router";
import { routeQueryArrayToString } from "routes";

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

  const tabRoutes = [
    {
      label: "Child Collections",
      route: `collection.child.collections`,
    },
    {
      label: "Manage",
      route: `collection.manage`,
    },
  ];

  return (
    <section>
      {data && data.community && (
        <PageHeader title={data.community.name} tabRoutes={tabRoutes} />
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
