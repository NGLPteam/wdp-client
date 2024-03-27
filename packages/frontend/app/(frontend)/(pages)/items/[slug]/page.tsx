import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityContentLayoutFactory from "components/factories/EntityContentLayoutFactory";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageItemQuery as Query } from "@/relay/pageItemQuery.graphql";
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
      <EntityContentLayoutFactory data={item} params={params} />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityContentLayoutFactoryFragment
    }
  }
`;
