import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityMetadataFactory from "components/factories/EntityMetadataFactory";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageItemMetadataQuery as Query } from "@/relay/pageItemMetadataQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function ItemPage({ params }: BasePageParams) {
  const { slug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const { item } = data ?? {};

  if (!item) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <EntityMetadataFactory data={item} />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageItemMetadataQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityMetadataFactoryFragment
    }
  }
`;
