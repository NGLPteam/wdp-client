import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import GoogleScholarMetaTags from "components/global/GoogleScholarMetaTags";
import getStaticGoogleScholarData from "contexts/GlobalStaticContext/getStaticGoogleScholarData";
import CommunityPickerPortal from "components/composed/instance/CommunityPicker/Portal";
import CommunityNavListPortal from "components/composed/community/CommunityNavList/Portal";
import SearchModalPortal from "components/layout/SearchModal/Portal";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutItemQuery as Query } from "@/relay/layoutItemQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

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
      {googleScholarData && (
        <GoogleScholarMetaTags entity={googleScholarData} />
      )}
      <CommunityPickerPortal data={item.community} />
      <CommunityNavListPortal data={item.community} />
      <SearchModalPortal data={item} />
      <EntityLayoutFactory data={item}>{children}</EntityLayoutFactory>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query layoutItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityLayoutFactoryFragment
      ...PortalSearchModalFragment

      community {
        ...PortalCommunityPickerFragment
        ...PortalCommunityNavListFragment
      }
    }
  }
`;
