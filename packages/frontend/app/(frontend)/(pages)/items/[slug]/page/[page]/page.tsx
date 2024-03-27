import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityPageLayoutFactory from "components/factories/EntityPageLayoutFactory";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageItemPageQuery as Query } from "@/relay/pageItemPageQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

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
      <EntityPageLayoutFactory data={item} />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageItemPageQuery($slug: Slug!, $pageSlug: String!) {
    item(slug: $slug) {
      ...EntityPageLayoutFactoryFragment
    }
  }
`;
