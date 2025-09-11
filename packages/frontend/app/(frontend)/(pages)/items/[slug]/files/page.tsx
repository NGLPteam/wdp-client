import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import AssetsBlock from "components/composed/asset/AssetsBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesItemFilesQuery as Query } from "@/relay/pageTemplatesItemFilesQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export async function generateStaticParams() {
  return [];
}

export default async function ItemFilesPage({ params }: BasePageParams) {
  const { slug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const { item } = data ?? {};

  if (!item) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <AssetsBlock data={item.assets} />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageTemplatesItemFilesQuery($slug: Slug!) {
    item(slug: $slug) {
      assets {
        ...AssetsBlockFragment
      }
    }
  }
`;
