import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import SearchLayout from "components/composed/search/SearchLayout";
import { searchQuery as Query } from "@/relay/searchQuery.graphql";
import AppLayout from "components/global/AppLayout";

export default function SearchPage() {
  const slug = useRouteSlug();

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <AppLayout data={data}>
          <SearchLayout />
        </AppLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query searchQuery {
    ...AppLayoutFragment
  }
`;
