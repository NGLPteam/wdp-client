import React, { useState, useEffect } from "react";
import { graphql } from "react-relay";
import { CollectionDetailQuery } from "@/relay/CollectionDetailQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { ModelHeader } from "components/composed/model";
import { useBreadcrumbs } from "hooks";
import { useRouter } from "next/router";

export default function CollectionLayout({ children }) {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data,
    error,
    isLoading,
  } = useAuthenticatedQuery<CollectionDetailQuery>(query, { slug });

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
          slug={slug}
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
  query CollectionDetailQuery($slug: Slug!) {
    collection(slug: $slug) {
      title
      slug
      ...useBreadcrumbsFragment
    }
  }
`;
