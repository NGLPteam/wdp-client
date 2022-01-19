import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { communitiesQuery as Query } from "@/relay/communitiesQuery.graphql";
import AppLayout from "components/global/AppLayout";

export default function CommunitiesPage() {
  const slug = useRouteSlug();

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <AppLayout data={data}>
          <></>
        </AppLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query communitiesQuery {
    ...AppLayoutFragment
  }
`;
