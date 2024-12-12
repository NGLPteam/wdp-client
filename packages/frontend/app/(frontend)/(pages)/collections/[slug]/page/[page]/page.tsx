import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityPageLayout from "@/components/composed/entity/EntityPageLayout";
import LoadingBlock from "@/components/atomic/loading/LoadingBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesCollectionPageQuery as Query } from "@/relay/pageTemplatesCollectionPageQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CollectionPagePage({ params }: BasePageParams) {
  const { slug, page: pageSlug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
    pageSlug,
  });

  const { collection } = data ?? {};

  if (!collection) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <Suspense fallback={<LoadingBlock />}>
        <EntityPageLayout data={collection.page} />
      </Suspense>
    </UpdateClientEnvironment>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query pageTemplatesCollectionPageQuery($slug: Slug!, $pageSlug: String!) {
    collection(slug: $slug) {
      page(slug: $pageSlug) {
        ...EntityPageLayoutFragment
      }
    }
  }
`;
