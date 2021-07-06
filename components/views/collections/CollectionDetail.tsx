import React, { useState, useEffect } from "react";
import { graphql } from "react-relay";
import {
  CollectionDetailQuery,
  CollectionDetailQueryVariables,
} from "@/relay/CollectionDetailQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import {
  SubcollectionList,
  SubitemList,
  Manage,
} from "components/views/entities";
import { EntityHeader } from "components/composed/entity";
import { useGlobalData } from "hooks/useGlobalData";
import { useBreadcrumbs } from "hooks";

export default function CollectionDetail() {
  const { activeId: id, activeView: view } = useGlobalData();

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
        <EntityHeader
          id={id}
          type="COLLECTION"
          view={view}
          title={data.collection.title}
          breadcrumbs={breadcrumbs}
        />
      )}
      {view === "main" && <div>Main</div>}
      {view === "collections" && <SubcollectionList />}
      {view === "items" && <SubitemList />}
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
