import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributorDetailNav from "../ContributorDetailNav";
import ContributorDetail from "components/composed/contributor/ContributorDetail";
import ContributorHTMLHead from "components/composed/contributor/ContributorHTMLHead";
import { ContributorItemDetailLayoutFragment$key } from "@/relay/ContributorItemDetailLayoutFragment.graphql";
import AppLayout from "components/global/AppLayout";

export default function ContributorItemDetailLayout({ data }: Props) {
  const layoutData = useMaybeFragment(fragment, data);

  return layoutData ? (
    <AppLayout data={layoutData} communityData={layoutData?.item?.community}>
      <ContributorHTMLHead data={layoutData.contributor} />
      <ContributorDetailNav data={layoutData.item} />
      <ContributorDetail data={layoutData.contributor} />
    </AppLayout>
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
        ...AppLayoutCommunityFragment
      }
    }

    ...AppLayoutFragment
  }
`;
