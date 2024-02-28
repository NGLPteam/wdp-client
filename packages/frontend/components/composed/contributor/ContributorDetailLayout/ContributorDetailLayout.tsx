import React from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ContributorDetail from "components/composed/contributor/ContributorDetail";
import ContributorHTMLHead from "components/composed/contributor/ContributorHTMLHead";
import { ContributorDetailLayoutQuery } from "@/relay/ContributorDetailLayoutQuery.graphql";
import AppLayout from "components/global/AppLayout";

export default function ContributorDetailLayout({
  queryRef,
}: {
  queryRef: PreloadedQuery<ContributorDetailLayoutQuery>;
}) {
  const layoutData = usePreloadedQuery<ContributorDetailLayoutQuery>(
    query,
    queryRef
  );
  return layoutData ? (
    <AppLayout>
      <ContributorHTMLHead data={layoutData.contributor} />
      <ContributorDetail data={layoutData.contributor} />
    </AppLayout>
  ) : null;
}

export const query = graphql`
  query ContributorDetailLayoutQuery($slug: Slug!) {
    contributor(slug: $slug) {
      ...ContributorHTMLHeadFragment
      ...ContributorDetailFragment
    }
  }
`;
