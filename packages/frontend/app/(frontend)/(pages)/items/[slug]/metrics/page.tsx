import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import ArticleAnalyticsBlock from "components/composed/analytics/ArticleAnalyticsBlock";
import { AnalyticsPrecision } from "types/graphql-schema";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesItemMetricsQuery as Query } from "@/relay/pageTemplatesItemMetricsQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function ItemMetricsPage({ params }: BasePageParams) {
  const { slug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
    dateRange: {},
    precision: "YEAR" as AnalyticsPrecision,
    usOnly: false,
  });

  const { item } = data ?? {};

  if (!item) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <Suspense fallback={<LoadingBlock />}>
        <ArticleAnalyticsBlock data={item} />
      </Suspense>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageTemplatesItemMetricsQuery(
    $slug: Slug!
    $dateRange: DateFilterInput!
    $precision: AnalyticsPrecision!
    $usOnly: Boolean!
  ) {
    item(slug: $slug) {
      ...ArticleAnalyticsBlockFragment
        @arguments(
          dateRange: $dateRange
          precision: $precision
          usOnly: $usOnly
        )
    }
  }
`;
