import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import BaseLayout from "components/composed/base/BaseLayout";
import { pagesQuery as Query } from "@/relay/pagesQuery.graphql";

export default function CommunitiesPage() {
  const slug = useRouteSlug();

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <BaseLayout data={data}>
          <></>
        </BaseLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query pagesQuery {
    ...BaseLayoutFragment
  }
`;
