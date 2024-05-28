import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import SearchLayout from "components/composed/search/SearchLayout";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import normalizeRouteQueryArray from "@wdp/lib/routes/helpers/normalizeRouteQueryArray";
import routeQueryArrayToString from "@wdp/lib/routes/helpers/routeQueryArrayToString";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { pageSearchCommunityQuery as Query } from "@/relay/pageSearchCommunityQuery.graphql";

export default async function CommunitySearchPage({
  params,
  searchParams,
}: BasePageParams & { searchParams: Record<string, string> }) {
  const { slug } = params;
  const { q, filters, page, order, schema } = searchParams;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
    ...(q && { query: q }),
    predicates: filters ? routeQueryArrayToString(filters) : [],
    page: page ?? 1,
    order: order ?? "PUBLISHED_ASCENDING",
    schema: schema ? normalizeRouteQueryArray(schema) : [],
  });

  const { community } = data ?? {};

  if (!community) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <Suspense fallback={<LoadingBlock />}>
        <SearchLayout data={community} scoped />
      </Suspense>
    </UpdateClientEnvironment>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query pageSearchCommunityQuery(
    $slug: Slug!
    $query: String
    $predicates: [SearchPredicateInput!]
    $page: Int
    $order: EntityOrder
    $schema: [String!]
  ) {
    community(slug: $slug) {
      ...SearchLayoutEntityFragment
        @arguments(
          query: $query
          predicates: $predicates
          page: $page
          order: $order
          schema: $schema
        )
    }
  }
`;
