import React, { useState, useEffect } from "react";
import { graphql } from "react-relay";
import {
  CommunityDetailQuery,
  CommunityDetailQueryVariables,
} from "@/relay/CommunityDetailQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { Manage } from "components/views/entities";
import CommunityChildCollections from "./CommunityChildCollections";
import { ModelHeader } from "components/composed/model";
import { useRouterContext } from "hooks/useRouterContext";
import { useRouter } from "next/router";

export default function CommunityDetail() {
  const { activeId: id, activeView: view } = useRouterContext();

  // This redirect is a temporary workaround to deal with immature routing. For demo
  // purposes, we want to show the correct landing page, but the current approach locks us
  // into an inflexible structure. Remove this when routing is revised.
  const router = useRouter();
  useEffect(() => {
    if (view === "main" && id) {
      const redirect = `/communities/${id}/collections`;
      router.push(redirect);
    }
  }, [view, id, router]);

  const [variables, setVariables] = useState<CommunityDetailQueryVariables>({
    slug: id,
  });

  const {
    data,
    error,
    isLoading,
  } = useAuthenticatedQuery<CommunityDetailQuery>(query, variables);

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
      {data && data.community && (
        <ModelHeader id={id} title={data.community.name} model="community" />
      )}

      {view === "main" && <div>Main</div>}
      {view === "collections" && (
        <CommunityChildCollections community={data.community} />
      )}
      {view === "manage" && <Manage />}
    </section>
  );
}

const query = graphql`
  query CommunityDetailQuery($slug: Slug!) {
    community(slug: $slug) {
      name
      slug
    }
  }
`;
