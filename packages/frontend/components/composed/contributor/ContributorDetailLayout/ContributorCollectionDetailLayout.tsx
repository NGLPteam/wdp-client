import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributorDetailNav from "../ContributorDetailNav";
import ContributorDetail from "components/composed/contributor/ContributorDetail";
import ContributorHTMLHead from "components/composed/contributor/ContributorHTMLHead";
import { ContributorCollectionDetailLayoutFragment$key } from "@/relay/ContributorCollectionDetailLayoutFragment.graphql";
import CommunityLayout from "components/composed/community/CommunityLayout";

export default function ContributorCollectionDetailLayout({ data }: Props) {
  const layoutData = useMaybeFragment(fragment, data);

  return layoutData ? (
    <CommunityLayout
      data={layoutData}
      communityData={layoutData?.collection?.community}
    >
      <ContributorHTMLHead data={layoutData.contributor} />
      <ContributorDetailNav data={layoutData.collection} />
      <ContributorDetail data={layoutData.contributor} />
    </CommunityLayout>
  ) : null;
}

interface Props {
  data?: ContributorCollectionDetailLayoutFragment$key | null;
}

const fragment = graphql`
  fragment ContributorCollectionDetailLayoutFragment on Query {
    contributor(slug: $slug) {
      ...ContributorHTMLHeadFragment
      ...ContributorDetailFragment
    }

    collection(slug: $collection) {
      ...ContributorDetailNavFragment

      community {
        ...CommunityLayoutFragment
      }
    }

    ...CommunityLayoutAppFragment
  }
`;
