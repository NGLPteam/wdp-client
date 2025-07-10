import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import SearchLayout from "components/composed/search/SearchLayout";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import { getPredicates } from "helpers/search";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { pageTemplatesSearchCommunityQuery as Query } from "@/relay/pageTemplatesSearchCommunityQuery.graphql";

export default async function CommunitySearchPage({
  params,
  searchParams,
}: BasePageParams & { searchParams: Record<string, string> }) {
  const { slug } = params;
  const { q, filters, page, order, schema } = searchParams;

  const predicates = filters ? getPredicates(JSON.parse(filters)) : [];

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
    ...(q && { query: q }),
    predicates,
    page: page ? parseInt(page) : 1,
    order: order ?? "PUBLISHED_ASCENDING",
    schema: schema ? schema.split(",") : [],
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

const query = graphql`
  query pageTemplatesSearchCommunityQuery(
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
