import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityDescendantsLayout from "components/composed/entity/EntityDescendantsLayout";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import EntityOrderingLayout from "@/components/composed/entity/EntityOrderingLayout";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesBrowseCommunityQuery as Query } from "@/relay/pageTemplatesBrowseCommunityQuery.graphql";
import { pageBrowseCommunityOrderingQuery as OrderingQuery } from "@/relay/pageBrowseCommunityOrderingQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CommunityBrowsePage({
  params,
  searchParams,
}: BasePageParams & { searchParams: Record<string, string> }) {
  const { slug, ordering } = params;
  const { page, order } = searchParams;

  const schema =
    typeof ordering === "string" ? decodeURIComponent(ordering) : null;

  if (!schema) return notFound();

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
    page: page ? parseInt(page) : 1,
    order: order ?? "PUBLISHED_ASCENDING",
    schema,
    schemaSlug: schema,
  });

  const { community } = data ?? {};

  if (!community) return notFound();

  const descendants = (
    <UpdateClientEnvironment records={records}>
      <Suspense fallback={<LoadingBlock />}>
        <EntityDescendantsLayout data={community.descendants} schema={schema} />
      </Suspense>
    </UpdateClientEnvironment>
  );

  if (!community.orderingForSchema) {
    return descendants;
  }

  const { data: orderingData, records: orderingRecords } =
    await fetchQuery<OrderingQuery>(orderingQuery, {
      slug,
      page: page ? parseInt(page) : 1,
      identifier: community.orderingForSchema.identifier,
    });

  if (!orderingData?.community) return descendants;

  return (
    <UpdateClientEnvironment records={orderingRecords}>
      <Suspense fallback={<LoadingBlock />}>
        <EntityOrderingLayout data={orderingData.community.ordering} />
      </Suspense>
    </UpdateClientEnvironment>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query pageTemplatesBrowseCommunityQuery(
    $slug: Slug!
    $schema: String!
    $schemaSlug: Slug!
    $page: Int
    $order: EntityDescendantOrder!
  ) {
    community(slug: $slug) {
      orderingForSchema(slug: $schemaSlug) {
        identifier
      }
      descendants(order: $order, schema: [$schema], page: $page) {
        ...EntityDescendantsLayoutFragment
      }
    }
  }
`;

const orderingQuery = graphql`
  query pageBrowseCommunityOrderingQuery(
    $slug: Slug!
    $identifier: String!
    $page: Int
  ) {
    community(slug: $slug) {
      ordering(identifier: $identifier) {
        disabled
        ...EntityOrderingLayoutFragment @arguments(page: $page)
      }
    }
  }
`;
