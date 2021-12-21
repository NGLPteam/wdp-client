import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributorDetailNav from "../ContributorDetailNav";
import ContributorDetail from "components/composed/contributor/ContributorDetail";
import ContributorHTMLHead from "components/composed/contributor/ContributorHTMLHead";
import { ContributorItemDetailLayoutFragment$key } from "@/relay/ContributorItemDetailLayoutFragment.graphql";
import CommunityLayout from "components/composed/community/CommunityLayout";

export default function ContributorItemDetailLayout({ data }: Props) {
  const layoutData = useMaybeFragment(fragment, data);

  return layoutData ? (
    <CommunityLayout
      data={layoutData}
      communityData={layoutData?.item?.community}
    >
      <ContributorHTMLHead data={layoutData.contributor} />
      <ContributorDetailNav data={layoutData.item} />
      <ContributorDetail data={layoutData.contributor} />
    </CommunityLayout>
  ) : null;
}

interface Props {
  data?: ContributorItemDetailLayoutFragment$key | null;
}

const fragment = graphql`
  fragment ContributorItemDetailLayoutFragment on Query {
    contributor(slug: $slug) {
      ...ContributorHTMLHeadFragment
      ...ContributorDetailFragment
    }

    item(slug: $item) {
      ...ContributorDetailNavFragment

      community {
        ...CommunityLayoutFragment
      }
    }

    ...CommunityLayoutAppFragment
  }
`;
