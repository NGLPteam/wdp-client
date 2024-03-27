import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import AssetDetailBlock from "components/composed/asset/AssetDetailBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageItemFileDetailQuery as Query } from "@/relay/pageItemFileDetailQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function ItemFileDetailPage({ params }: BasePageParams) {
  const { file } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    file,
  });

  const { asset } = data ?? {};

  if (!asset) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <AssetDetailBlock data={asset} />
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageItemFileDetailQuery($file: Slug!) {
    asset(slug: $file) {
      ...AssetDetailBlockFragment
    }
  }
`;
