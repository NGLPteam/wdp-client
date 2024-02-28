import React from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ContributorDetailNav from "../ContributorDetailNav";
import ContributorDetail from "components/composed/contributor/ContributorDetail";
import ContributorHTMLHead from "components/composed/contributor/ContributorHTMLHead";
import { ContributorCollectionDetailLayoutQuery } from "@/relay/ContributorCollectionDetailLayoutQuery.graphql";
import AppLayout from "components/global/AppLayout";

export default function ContributorCollectionDetailLayout({
  queryRef,
}: {
  queryRef: PreloadedQuery<ContributorCollectionDetailLayoutQuery>;
}) {
  const layoutData = usePreloadedQuery<ContributorCollectionDetailLayoutQuery>(
    query,
    queryRef
  );

  return layoutData ? (
    <AppLayout communityData={layoutData?.collection?.community}>
      <ContributorHTMLHead data={layoutData.contributor} />
      <ContributorDetailNav data={layoutData.collection} />
      <ContributorDetail data={layoutData.contributor} />
    </AppLayout>
  ) : null;
}

export const query = graphql`
  query ContributorCollectionDetailLayoutQuery(
    $slug: Slug!
    $collection: Slug!
  ) {
    contributor(slug: $slug) {
      ...ContributorHTMLHeadFragment
      ...ContributorDetailFragment
    }

    collection(slug: $collection) {
      ...ContributorDetailNavFragment

      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
