import React from "react";
import { graphql } from "react-relay";
import { CollectionLayoutQuery } from "@/relay/CollectionLayoutQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader } from "components/layout";
import { useBreadcrumbs } from "hooks";
import { useRouter } from "next/router";
import { routeQueryArrayToString } from "routes";

export default function CollectionLayout({ children }) {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data,
    error,
    isLoading,
  } = useAuthenticatedQuery<CollectionLayoutQuery>(query, {
    slug: routeQueryArrayToString(slug),
  });

  const breadcrumbs = useBreadcrumbs(data?.collection);

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
      label: "Child Items",
      route: `collection.child.items`,
    },
    {
      label: "Manage",
      route: `collection.manage`,
    },
  ];

  return (
    <section>
      {data && data.collection && (
        <PageHeader
          title={data.collection.title}
          breadcrumbsProps={{ data: breadcrumbs }}
          tabRoutes={tabRoutes}
        />
      )}

      {children}
    </section>
  );
}

const query = graphql`
  query CollectionLayoutQuery($slug: Slug!) {
    collection(slug: $slug) {
      title
      slug
      ...useBreadcrumbsFragment
    }
  }
`;
