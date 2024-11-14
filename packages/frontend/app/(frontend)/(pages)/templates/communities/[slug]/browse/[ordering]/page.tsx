import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import EntityDescendantsLayout from "components/composed/entity/EntityDescendantsLayout";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesBrowseCommunityQuery as Query } from "@/relay/pageTemplatesBrowseCommunityQuery.graphql";
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

  return (
    <UpdateClientEnvironment records={records}>
      {community.orderingForSchema ? (
        <Suspense fallback={<LoadingBlock />}>
          <EntityOrderingLayoutFactory
            data={community}
            ordering={community.orderingForSchema.identifier}
            params={{ slug }}
          />
        </Suspense>
      ) : (
        <Suspense fallback={<LoadingBlock />}>
          <EntityDescendantsLayout
            data={community.descendants}
            schema={schema}
          />
        </Suspense>
      )}
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
      ...EntityOrderingLayoutFactoryFragment
    }
  }
`;
