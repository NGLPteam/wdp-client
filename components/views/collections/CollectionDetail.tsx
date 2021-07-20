import React, { useState, useEffect } from "react";
import { graphql } from "react-relay";
import {
  CollectionDetailQuery,
  CollectionDetailQueryVariables,
} from "@/relay/CollectionDetailQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { Manage } from "components/views/entities";
import { ModelHeader } from "components/composed/model";
import { useRouterContext } from "hooks/useRouterContext";
import { useBreadcrumbs } from "hooks";
import CollectionChildCollections from "./CollectionChildCollections";
import CollectionChildItems from "./CollectionChildItems";
import { useRouter } from "next/router";

export default function CollectionDetail() {
  const { activeId: id, activeView: view } = useRouterContext();

  // This redirect is a temporary workaround to deal with immature routing. For demo
  // purposes, we want to show the correct landing page, but the current approach locks us
  // into an inflexible structure. Remove this when routing is revised.
  const router = useRouter();
  useEffect(() => {
    if (view === "main" && id) {
      const redirect = `/collections/${id}/collections`;
      router.push(redirect);
    }
  }, [view, id, router]);

  const [variables, setVariables] = useState<CollectionDetailQueryVariables>({
    slug: id,
  });

  const {
    data,
    error,
    isLoading,
  } = useAuthenticatedQuery<CollectionDetailQuery>(query, variables);

  const breadcrumbs = useBreadcrumbs(data?.collection);

  useEffect(() => {
    setVariables((v) => ({ ...v, slug: id }));
  }, [id, setVariables]);

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
          id={id}
          model="collection"
          title={data.collection.title}
          breadcrumbs={breadcrumbs}
        />
      )}
      {view === "main" && <div>Main</div>}
      {view === "collections" && (
        <CollectionChildCollections collection={data.collection} />
      )}
      {view === "items" && (
        <CollectionChildItems collection={data.collection} />
      )}
      {view === "manage" && <Manage />}
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
