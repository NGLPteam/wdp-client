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
import NavigationTemplate from "@/components/templates/EntityNavigation";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutItemTemplateQuery as Query } from "@/relay/layoutItemTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import ViewCounter from "@/components/composed/analytics/ViewCounter";
import EntityNavBar from "@/components/composed/entity/EntityNavBar";

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
    layouts: { hero, navigation },
  } = item;

  const {
    enableDescendantSearch,
    enableDescendantBrowsing,
    descendantSearchPrompt,
  } = hero?.template?.definition ?? {};

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
      {(enableDescendantBrowsing || enableDescendantSearch) && (
        <EntityNavBar
          data={item}
          showBrowse={enableDescendantBrowsing}
          showSearch={enableDescendantSearch}
          searchPrompt={descendantSearchPrompt}
        />
      )}
      <NavigationTemplate data={navigation} />
      {children}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query layoutItemTemplateQuery($slug: Slug!) {
    item(slug: $slug) {
      layouts {
        hero {
          template {
            definition {
              enableDescendantBrowsing
              enableDescendantSearch
              descendantSearchPrompt
            }
          }
          ...HeroTemplateFragment
        }
        navigation {
          ...EntityNavigationTemplateFragment
        }
      }
      ...PortalSearchModalFragment
      ...EntityNavBarFragment

      community {
        ...PortalCommunityPickerFragment
        ...PortalCommunityNavListFragment
        ...PortalCommunityNameFragment
      }
    }
  }
`;
