import React from "react";
import { graphql } from "react-relay";
import { CollectionLayoutQuery } from "@/relay/CollectionLayoutQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { ModelHeader } from "components/composed/model";
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

  return (
    <section>
      {data && data.collection && (
        <ModelHeader
          type="COLLECTION"
          title={data.collection.title}
          breadcrumbs={breadcrumbs}
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
