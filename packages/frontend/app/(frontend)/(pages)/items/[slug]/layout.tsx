import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import GoogleScholarMetaTags from "components/global/GoogleScholarMetaTags";
import getStaticGoogleScholarData from "contexts/GlobalStaticContext/getStaticGoogleScholarData";
import { ResolvingMetadata, Metadata } from "next";
import HeroTemplate from "@/components/templates/Hero";
import ProcessingCheck from "@/components/templates/ProcessingCheck";
import FullTextCheck from "@/components/templates/FullTextCheck";
import NavigationTemplate from "@/components/templates/EntityNavigation";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutItemTemplateQuery as Query } from "@/relay/layoutItemTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import ViewCounter from "@/components/composed/analytics/ViewCounter";
import EntityNavBar from "@/components/composed/entity/EntityNavBar";
import AppBody from "@/components/global/AppBody";
import { CommunityContextProvider } from "@/contexts/CommunityContext";
import generateItemMetadata from "@/app/(frontend)/(pages)/items/[slug]/_metadata/item";

export async function generateMetadata(
  props: BasePageParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return generateItemMetadata(props, parent);
}

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

  const { community, layouts } = item;

  const { hero, navigation } = layouts ?? {};

  return (
    <UpdateClientEnvironment records={records}>
      <CommunityContextProvider data={community}>
        <AppBody data={data} searchData={item}>
          <ProcessingCheck data={layouts} entityType="item">
            {googleScholarData && (
              <GoogleScholarMetaTags entity={googleScholarData} />
            )}
            {slug && <ViewCounter slug={slug} />}
            {hero && <HeroTemplate data={hero} />}
            <EntityNavBar data={item} />
            <FullTextCheck data={layouts}>
              <NavigationTemplate data={navigation} />
              {children}
            </FullTextCheck>
          </ProcessingCheck>
        </AppBody>
      </CommunityContextProvider>
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
        navigation {
          ...EntityNavigationTemplateFragment
        }
        ...ProcessingCheckFragment
        ...FullTextCheckFragment
      }
      ...SearchButtonFragment
      ...EntityNavBarFragment

      community {
        ...CommunityContextFragment
      }
    }
    ...AppBodyFragment
  }
`;
