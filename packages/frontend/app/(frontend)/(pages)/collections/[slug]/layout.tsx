import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import AppLayout from "components/global/AppLayout";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutCollectionQuery as Query } from "@/relay/layoutCollectionQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CollectionLayout({
  children,
  params,
}: BasePageParams & PropsWithChildren) {
  const { slug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const { collection } = data ?? {};

  if (!collection) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <AppLayout communityData={collection.community} entityData={collection}>
        <EntityLayoutFactory data={collection}>{children}</EntityLayoutFactory>
      </AppLayout>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query layoutCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...AppLayoutEntityFragment
      ...EntityLayoutFactoryFragment

      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
