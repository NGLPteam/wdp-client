import { PropsWithChildren } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import GoogleScholarMetaTags from "components/global/GoogleScholarMetaTags";
import getStaticGoogleScholarData from "contexts/GlobalStaticContext/getStaticGoogleScholarData";
import CommunityPickerPortal from "components/composed/instance/CommunityPicker/Portal";
import CommunityNavListPortal from "components/composed/community/CommunityNavList/Portal";
import CommunityNamePortal from "components/composed/community/CommunityName/Portal";
import SearchModalPortal from "components/layout/SearchModal/Portal";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { layoutItemQuery as Query } from "@/relay/layoutItemQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import ViewCounter from "@/components/composed/analytics/ViewCounter";

export default async function ItemLayout({
  children,
}: BasePageParams & PropsWithChildren) {
  // const { slug } = params;
  const slug = "Yv3YGPBhqvnmI27Ybum7Nzf6xEgmnOKE";

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
      <CommunityNamePortal data={item.community} />
      <SearchModalPortal data={item} />
      {slug && <ViewCounter slug={slug} />}
      {children}
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query layoutItemTemplateQuery($slug: Slug!) {
    item(slug: $slug) {
      ...PortalSearchModalFragment

      community {
        ...PortalCommunityPickerFragment
        ...PortalCommunityNavListFragment
        ...PortalCommunityNameFragment
      }
    }
  }
`;
