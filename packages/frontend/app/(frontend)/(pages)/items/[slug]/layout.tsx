import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import GoogleScholarMetaTags from "components/global/GoogleScholarMetaTags";
import getStaticGoogleScholarData from "contexts/GlobalStaticContext/getStaticGoogleScholarData";
import SearchModalPortal from "components/layout/SearchModal/Portal";
import { ResolvingMetadata, Metadata } from "next";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutItemQuery as Query } from "@/relay/layoutItemQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import AppBody from "@/components/global/AppBody";
import { CommunityContextProvider } from "@/contexts/CommunityContext";
import generateItemMetadata from "./_metadata/item";

export async function generateMetadata(
  props: BasePageParams,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return generateItemMetadata(props, parent);
}

export default async function ItemLayout({
  children,
  params,
}: BasePageParams & PropsWithChildren) {
  const { slug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const googleScholarData = await getStaticGoogleScholarData(slug);

  const { item } = data ?? {};

  if (!item) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <CommunityContextProvider data={item.community}>
        <AppBody data={data}>
          {googleScholarData && (
            <GoogleScholarMetaTags entity={googleScholarData} />
          )}
          <SearchModalPortal data={item} />
          <EntityLayoutFactory data={item}>{children}</EntityLayoutFactory>
        </AppBody>
      </CommunityContextProvider>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query layoutItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityLayoutFactoryFragment
      ...PortalSearchModalFragment

      community {
        ...CommunityContextFragment
      }
    }
    ...AppBodyFragment
  }
`;
