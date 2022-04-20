import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRoutePageSlug, useRouteSlug } from "@wdp/lib/routes";
import { PageSlugCollectionQuery as Query } from "@/relay/PageSlugCollectionQuery.graphql";
import EntityPageLayoutFactory from "components/factories/EntityPageLayoutFactory";
import CollectionLayoutQuery from "components/composed/collections/CollectionLayoutQuery";

export default function CommunityPage() {
  const slug = useRouteSlug();
  const pageSlug = useRoutePageSlug();

  return slug && pageSlug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug, pageSlug }}>
      {({ data }) => (
        <CollectionLayoutQuery data={data}>
          <EntityPageLayoutFactory data={data?.collection} />
        </CollectionLayoutQuery>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query PageSlugCollectionQuery($slug: Slug!, $pageSlug: String!) {
    collection(slug: $slug) {
      ...EntityPageLayoutFactoryFragment
    }
    ...CollectionLayoutQueryFragment @arguments(slug: $slug)
  }
`;
