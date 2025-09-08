import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityPageLayout from "@/components/composed/entity/EntityPageLayout";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesItemPageQuery as Query } from "@/relay/pageTemplatesItemPageQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export async function generateStaticParams() {
  return [];
}

export default async function ItemPagePage({ params }: BasePageParams) {
  const { slug, page } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
    pageSlug: page,
  });

  const { item } = data ?? {};

  if (!item) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <EntityPageLayout data={item.page} />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageTemplatesItemPageQuery($slug: Slug!, $pageSlug: String!) {
    item(slug: $slug) {
      page(slug: $pageSlug) {
        ...EntityPageLayoutFragment
      }
    }
  }
`;
