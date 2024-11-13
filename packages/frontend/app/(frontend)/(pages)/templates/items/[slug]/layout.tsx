import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import GoogleScholarMetaTags from "components/global/GoogleScholarMetaTags";
import getStaticGoogleScholarData from "contexts/GlobalStaticContext/getStaticGoogleScholarData";
import CommunityPickerPortal from "components/composed/instance/CommunityPicker/Portal";
import CommunityNavListPortal from "components/composed/community/CommunityNavList/Portal";
import CommunityNamePortal from "components/composed/community/CommunityName/Portal";
import SearchModalPortal from "components/layout/SearchModal/Portal";
import HeroTemplate from "@/components/templates/Hero";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutItemTemplateQuery as Query } from "@/relay/layoutItemTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import ViewCounter from "@/components/composed/analytics/ViewCounter";

export default async function ItemLayout({
  children,
  params: { slug },
}: BasePageParams & PropsWithChildren) {
  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const googleScholarData = await getStaticGoogleScholarData(slug);

  const { item } = data ?? {};

  if (!item) return notFound();

  const {
    community,
    layouts: { hero },
  } = item;

  return (
    <UpdateClientEnvironment records={records}>
      {googleScholarData && (
        <GoogleScholarMetaTags entity={googleScholarData} />
      )}
      <CommunityPickerPortal data={community} />
      <CommunityNavListPortal data={community} />
      <CommunityNamePortal data={community} />
      <SearchModalPortal data={item} />
      {slug && <ViewCounter slug={slug} />}
      {hero && <HeroTemplate data={hero} />}
      {children}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query layoutItemTemplateQuery($slug: Slug!) {
    item(slug: $slug) {
      layouts {
        hero {
          ...HeroTemplateFragment
        }
      }
      ...PortalSearchModalFragment

      community {
        ...PortalCommunityPickerFragment
        ...PortalCommunityNavListFragment
        ...PortalCommunityNameFragment
      }
    }
  }
`;
