import React, { useState, useEffect } from "react";
import { graphql } from "react-relay";
import {
  CommunityDetailQuery,
  CommunityDetailQueryVariables,
} from "@/relay/CommunityDetailQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import {
  SubcollectionList,
  Manage,
  EntityHeader,
} from "components/views/entities";
import { useGlobalData } from "hooks/useGlobalData";

export default function CommunityDetail() {
  const { activeId: id, activeView: view } = useGlobalData();

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
        <EntityHeader
          id={id}
          title={data.community.name}
          view={view}
          type="COMMUNITY"
        />
      )}

      {view === "main" && <div>Main</div>}
      {view === "collections" && <SubcollectionList />}
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
