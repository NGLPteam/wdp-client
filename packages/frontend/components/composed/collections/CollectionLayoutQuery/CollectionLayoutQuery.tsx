import React, { ComponentProps } from "react";
import ErrorPage from "next/error";
import { graphql } from "react-relay";
import type {
  QueryLayoutProps,
  QueryPageComponentProps,
} from "@wdp/lib/types/page";
import { FragmentWrapper, QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CollectionLayout from "../CollectionLayout";
import { HasFragment } from "types/graphql-helpers";
import { CollectionLayoutQueryFragment$key } from "@/relay/CollectionLayoutQueryFragment.graphql";

type CollectionQuery = {
  readonly response: HasFragment<"CollectionLayoutQueryFragment">;
  readonly variables: { slug: string };
};

function CollectionLayoutQuery<
  Query extends CollectionQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  variables = {},
  PageComponent,
  pageComponentProps,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof CollectionLayout>> & {
  variables?: Omit<CollectionQuery["variables"], "slug">;
}) {
  const slug = useRouteSlug();

  if (!slug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ slug, ...variables }}
      options={{ fetchPolicy: "store-or-network" }}
    >
      {({ data }) => (
        <FragmentWrapper<CollectionLayoutQueryFragment$key>
          data={data}
          fragment={fragment}
        >
          {({ enhancedData }) => (
            <CollectionLayout data={enhancedData} {...layoutProps}>
              <PageComponent data={data} {...pageComponentProps} />
            </CollectionLayout>
          )}
        </FragmentWrapper>
      )}
    </QueryWrapper>
  );
}

const fragment = graphql`
  fragment CollectionLayoutQueryFragment on Query
  @argumentDefinitions(slug: { type: "Slug!" }) {
    ...CollectionLayoutFragment @arguments(slug: $slug)
  }
`;

export default CollectionLayoutQuery;
