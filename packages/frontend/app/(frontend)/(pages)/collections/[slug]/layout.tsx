import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import CommunityPickerPortal from "components/composed/instance/CommunityPicker/Portal";
import CommunityNavListPortal from "components/composed/community/CommunityNavList/Portal";
import SearchModalPortal from "components/layout/SearchModal/Portal";
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
      <CommunityNavListPortal data={collection.community} />
      <CommunityPickerPortal data={collection.community} />
      <SearchModalPortal data={collection} />
      <EntityLayoutFactory data={collection}>{children}</EntityLayoutFactory>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query layoutCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...EntityLayoutFactoryFragment
      ...PortalSearchModalFragment

      community {
        ...PortalCommunityPickerFragment
        ...PortalCommunityNavListFragment
      }
    }
  }
`;
