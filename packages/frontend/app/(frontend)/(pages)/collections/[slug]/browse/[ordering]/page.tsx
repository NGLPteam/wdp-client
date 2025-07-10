import { Suspense, ComponentProps } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityOrderingLayout from "@/components/composed/entity/EntityOrderingLayout";
import LoadingBlock from "@/components/atomic/loading/LoadingBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesBrowseCollectionQuery as Query } from "@/relay/pageTemplatesBrowseCollectionQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

type ContextType = ComponentProps<typeof EntityOrderingLayout>["showContext"];

export default async function CollectionBrowsePage({
  params,
  searchParams,
}: {
  params: BasePageParams["params"] & {
    ordering: string | string[];
    context?: string | string[];
  };
  searchParams: { context: ContextType; page: string };
}) {
  const { slug, ordering } = params;
  const { context, page } = searchParams;

  const { data, records } = await fetchQuery<Query>(query, {
    identifier: ordering,
    page: parseInt(page) || 1,
    slug,
  });

  const { collection } = data ?? {};

  if (!collection) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <Suspense fallback={<LoadingBlock />}>
        <EntityOrderingLayout
          data={collection.ordering}
          showContext={context}
        />
      </Suspense>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageTemplatesBrowseCollectionQuery(
    $slug: Slug!
    $identifier: String!
    $page: Int
  ) {
    collection(slug: $slug) {
      ordering(identifier: $identifier) {
        disabled
        ...EntityOrderingLayoutFragment
      }
    }
  }
`;
