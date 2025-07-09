import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import SearchLayout from "components/composed/search/SearchLayout";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import { getPredicates } from "helpers/search";
import { pageSearchQuery as Query } from "@/relay/pageSearchQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import fetchQuery from "@/lib/relay/fetchQuery";
import AppBody from "@/components/global/AppBody";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const { q, filters, page, order, schema } = searchParams;

  const predicates = filters ? getPredicates(JSON.parse(filters)) : [];

  const { data, records } = await fetchQuery<Query>(query, {
    ...(q && { query: q }),
    predicates,
    page: page ? parseInt(page) : 1,
    order: order ?? "PUBLISHED_ASCENDING",
    schema: schema ? schema.split(",") : [],
  });

  if (!data) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <AppBody data={data}>
        <Suspense fallback={<LoadingBlock />}>
          <SearchLayout data={data} />
        </Suspense>
      </AppBody>
    </UpdateClientEnvironment>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query pageSearchQuery(
    $query: String
    $predicates: [SearchPredicateInput!]
    $page: Int
    $order: EntityOrder
    $schema: [String!]
  ) {
    ...SearchLayoutFragment
      @arguments(
        query: $query
        predicates: $predicates
        page: $page
        order: $order
        schema: $schema
      )

    ...AppBodyFragment
  }
`;
