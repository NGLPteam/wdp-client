import React from "react";
import { graphql } from "react-relay";
import { useRoutePageSlug } from "@wdp/lib/routes";
import { GetLayout } from "@wdp/lib/types/page";
import { PageSlugCollectionQuery as Query } from "@/relay/PageSlugCollectionQuery.graphql";
import CollectionLayoutQuery from "components/composed/collections/CollectionLayoutQuery";
import EntityPageLayoutFactory from "components/factories/EntityPageLayoutFactory";

export default function CommunityPage({ data }: Props) {
  return <EntityPageLayoutFactory data={data?.collection} />;
}

const GetCollectionLayout: GetLayout<Props> = (props) => {
  const pageSlug = useRoutePageSlug();

  return (
    <CollectionLayoutQuery<Query, Props>
      query={query}
      variables={{ pageSlug }}
      {...props}
    />
  );
};

type Props = {
  data: Query["response"];
};

CommunityPage.getLayout = GetCollectionLayout;

const query = graphql`
  query PageSlugCollectionQuery($slug: Slug!, $pageSlug: String!) {
    collection(slug: $slug) {
      ...EntityPageLayoutFactoryFragment
    }
    ...CollectionLayoutQueryFragment @arguments(slug: $slug)
  }
`;
