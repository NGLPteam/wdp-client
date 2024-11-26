import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import { ResolvingMetadata, Metadata } from "next";
import HeroTemplate from "@/components/templates/Hero";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutCollectionTemplateQuery as Query } from "@/relay/layoutCollectionTemplateQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import ViewCounter from "@/components/composed/analytics/ViewCounter";
import EntityNavBar from "@/components/composed/entity/EntityNavBar";
import AppBody from "@/components/global/AppBody";
import { CommunityContextProvider } from "@/contexts/CommunityContext";
import generateCollectionMetadata from "@/app/(frontend)/(pages)/collections/[slug]/_metadata/collection";

export async function generateMetadata(
  props: BasePageParams,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return generateCollectionMetadata(props, parent);
}

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

  const {
    enableDescendantSearch,
    enableDescendantBrowsing,
    descendantSearchPrompt,
  } = hero?.template?.definition ?? {};

  return (
    <UpdateClientEnvironment records={records}>
      <CommunityContextProvider data={community}>
        <AppBody data={data} searchData={collection}>
          {slug && <ViewCounter slug={slug} />}
          {hero && <HeroTemplate data={hero} />}
          {(enableDescendantBrowsing || enableDescendantSearch) && (
            <EntityNavBar
              data={collection}
              showBrowse={enableDescendantBrowsing}
              showSearch={enableDescendantSearch}
              searchPrompt={descendantSearchPrompt}
            />
          )}
          {children}
        </AppBody>
      </CommunityContextProvider>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query layoutCollectionTemplateQuery($slug: Slug!) {
    collection(slug: $slug) {
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
