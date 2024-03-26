import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import AppLayout from "components/global/AppLayout";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageBrowseCollectionQuery as Query } from "@/relay/pageBrowseCollectionQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CollectionBrowsePage({
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

  const { collection } = data ?? {};

  if (!collection) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <AppLayout communityData={collection.community} entityData={collection}>
        <EntityLayoutFactory data={collection}>
          <Suspense fallback={<LoadingBlock />}>
            <EntityOrderingLayoutFactory data={collection} params={params} />
          </Suspense>
        </EntityLayoutFactory>
      </AppLayout>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageBrowseCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...EntityOrderingLayoutFactoryFragment
      ...AppLayoutEntityFragment
      ...EntityLayoutFactoryFragment
      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
