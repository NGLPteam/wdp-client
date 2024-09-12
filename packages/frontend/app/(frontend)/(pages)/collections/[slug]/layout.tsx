import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import CommunityPickerPortal from "components/composed/instance/CommunityPicker/Portal";
import CommunityNavListPortal from "components/composed/community/CommunityNavList/Portal";
import SearchModalPortal from "components/layout/SearchModal/Portal";
import { ResolvingMetadata, Metadata } from "next";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutCollectionQuery as Query } from "@/relay/layoutCollectionQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import generateCollectionMetadata from "./_metadata/collection";

export async function generateMetadata(
  props: BasePageParams,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return generateCollectionMetadata(props, parent);
}

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

export const dynamic = "force-dynamic";

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
