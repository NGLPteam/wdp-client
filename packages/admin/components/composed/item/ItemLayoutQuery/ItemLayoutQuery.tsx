import React, { ComponentProps } from "react";
import ErrorPage from "next/error";
import { graphql } from "relay-runtime";
import { GraphQLTaggedNode } from "react-relay";
import type {
  QueryLayoutProps,
  QueryPageComponentProps,
} from "@wdp/lib/types/page";
import ItemLayout from "../ItemLayout";
import { QueryWrapper, FragmentWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { HasFragment } from "types/graphql-helpers";
import type { ItemLayoutQueryFragment$key } from "@/relay/ItemLayoutQueryFragment.graphql";
import { AuthContextProvider } from "contexts/AuthContext";

function ItemLayoutQuery<
  Query extends ItemQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  PageComponent,
  pageComponentProps,
  refetchTags,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof ItemLayout>>) {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const itemSlug = useRouteSlug();
  if (!itemSlug) return <ErrorPage statusCode={404} />;

  const hasQuery =
    !!searchQueryVars?.query ||
    (!!searchQueryVars?.predicates && searchQueryVars.predicates.length > 0);

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{
        ...queryVars,
        ...searchQueryVars,
        hasQuery,
        itemSlug,
      }}
      refetchTags={refetchTags}
    >
      {({ data }) => (
        <FragmentWrapper<ItemLayoutQueryFragment$key>
          data={data?.item}
          fragment={fragment as GraphQLTaggedNode}
        >
          {({ enhancedData }) => (
            <AuthContextProvider data={enhancedData}>
              <ItemLayout {...layoutProps} data={enhancedData}>
                <PageComponent data={data} {...pageComponentProps} />
              </ItemLayout>
            </AuthContextProvider>
          )}
        </FragmentWrapper>
      )}
    </QueryWrapper>
  );
}

type ItemQuery = {
  readonly response: {
    item?: HasFragment<"ItemLayoutQueryFragment"> | null;
  };
  readonly variables: { itemSlug: string; hasQuery?: boolean };
};

const fragment = graphql`
  fragment ItemLayoutQueryFragment on Item {
    ...ItemLayoutFragment
    ...AuthContextFragment
  }
`;

export default ItemLayoutQuery;
