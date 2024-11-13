import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import CommunityPickerPortal from "components/composed/instance/CommunityPicker/Portal";
import CommunityNavListPortal from "components/composed/community/CommunityNavList/Portal";
import SearchModalPortal from "components/layout/SearchModal/Portal";
import HeroTemplate from "@/components/templates/Hero";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutCollectionTemplateQuery as Query } from "@/relay/layoutCollectionTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import ViewCounter from "@/components/composed/analytics/ViewCounter";

export const dynamic = "force-dynamic";

export default async function CollectionTemplateLayout({
  children,
  params: { slug },
}: BasePageParams & PropsWithChildren) {
  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const { collection } = data ?? {};

  if (!collection) return notFound();

  const {
    community,
    layouts: { hero },
  } = collection;

  return (
    <UpdateClientEnvironment records={records}>
      <CommunityNavListPortal data={community} />
      <CommunityPickerPortal data={community} />
      <SearchModalPortal data={collection} />
      {slug && <ViewCounter slug={slug} />}
      {hero && <HeroTemplate data={hero} />}
      {children}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query layoutCollectionTemplateQuery($slug: Slug!) {
    collection(slug: $slug) {
      layouts {
        hero {
          ...HeroTemplateFragment
        }
      }
      ...PortalSearchModalFragment

      community {
        ...PortalCommunityPickerFragment
        ...PortalCommunityNavListFragment
      }
    }
  }
`;
