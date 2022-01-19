import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import InstanceContentLayout from "components/composed/instance/InstanceContentLayout";
import { pagesQuery as Query } from "@/relay/pagesQuery.graphql";
import AppLayout from "components/global/AppLayout";

export default function HomePage() {
  const slug = useRouteSlug();

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <AppLayout data={data}>
          <InstanceContentLayout data={data} />
        </AppLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query pagesQuery {
    ...AppLayoutFragment
    ...InstanceContentLayoutFragment
  }
`;
