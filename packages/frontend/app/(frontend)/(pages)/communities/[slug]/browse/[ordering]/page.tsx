import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageBrowseCommunityQuery as Query } from "@/relay/pageBrowseCommunityQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CommunityBrowsePage({
  params,
}: {
  params: BasePageParams["params"] & {
    ordering: string | string[];
    page?: string | string[];
  };
}) {
  const { data, records } = await fetchQuery<Query>(query, {
    slug: params.slug,
  });

  const { community } = data ?? {};

  if (!community) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <Suspense fallback={<LoadingBlock />}>
        <EntityOrderingLayoutFactory data={community} params={params} />
      </Suspense>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageBrowseCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...EntityOrderingLayoutFactoryFragment
    }
  }
`;
