import React, { ComponentProps } from "react";
import ErrorPage from "next/error";
import { graphql } from "react-relay";
import type {
  QueryLayoutProps,
  QueryPageComponentProps,
} from "@wdp/lib/types/page";
import { FragmentWrapper, QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import ItemLayout from "../ItemLayout";
import { HasFragment } from "types/graphql-helpers";
import { ItemLayoutQueryFragment$key } from "@/relay/ItemLayoutQueryFragment.graphql";

type ItemQuery = {
  readonly response: HasFragment<"ItemLayoutQueryFragment">;
  readonly variables: { slug: string };
};

function ItemLayoutQuery<
  Query extends ItemQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  variables = {},
  PageComponent,
  pageComponentProps,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof ItemLayout>> & {
  variables?: Omit<ItemQuery["variables"], "slug">;
}) {
  const slug = useRouteSlug();

  if (!slug) return <ErrorPage statusCode={404} />;

  console.log({ slug, ...variables });

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ slug, ...variables }}
      options={{ fetchPolicy: "store-or-network" }}
    >
      {({ data }) => (
        <FragmentWrapper<ItemLayoutQueryFragment$key>
          data={data}
          fragment={fragment}
        >
          {({ enhancedData }) => (
            <ItemLayout data={enhancedData} {...layoutProps}>
              <PageComponent data={data} {...pageComponentProps} />
            </ItemLayout>
          )}
        </FragmentWrapper>
      )}
    </QueryWrapper>
  );
}

const fragment = graphql`
  fragment ItemLayoutQueryFragment on Query
  @argumentDefinitions(slug: { type: "Slug!" }) {
    ...ItemLayoutFragment @arguments(slug: $slug)
  }
`;

export default ItemLayoutQuery;
