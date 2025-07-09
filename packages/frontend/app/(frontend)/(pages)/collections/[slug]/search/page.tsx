import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import { getPredicates } from "helpers/search";
import SearchLayout from "@/components/composed/search/SearchLayout";
import LoadingBlock from "@/components/atomic/loading/LoadingBlock";
import { pageSearchCollectionQuery as Query } from "@/relay/pageSearchCollectionQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import fetchQuery from "@/lib/relay/fetchQuery";
import { BasePageParams } from "@/types/page";

export default async function CollectionSearchPage({
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

  const { collection } = data ?? {};

  if (!collection) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <Suspense fallback={<LoadingBlock />}>
        <SearchLayout data={collection} scoped />
      </Suspense>
    </UpdateClientEnvironment>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query pageSearchCollectionQuery(
    $slug: Slug!
    $query: String
    $predicates: [SearchPredicateInput!]
    $page: Int
    $order: EntityOrder
    $schema: [String!]
  ) {
    collection(slug: $slug) {
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
