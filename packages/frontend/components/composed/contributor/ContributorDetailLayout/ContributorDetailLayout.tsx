import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributorDetail from "components/composed/contributor/ContributorDetail";
import ContributorHTMLHead from "components/composed/contributor/ContributorHTMLHead";
import { ContributorDetailLayoutFragment$key } from "@/relay/ContributorDetailLayoutFragment.graphql";
import AppLayout from "components/global/AppLayout";

export default function ContributorDetailLayout({ data }: Props) {
  const layoutData = useMaybeFragment(fragment, data);

  return layoutData ? (
    <AppLayout>
      <ContributorHTMLHead data={layoutData.contributor} />
      <ContributorDetail data={layoutData.contributor} />
    </AppLayout>
  ) : null;
}

interface Props {
  data?: ContributorDetailLayoutFragment$key | null;
}

const fragment = graphql`
  fragment ContributorDetailLayoutFragment on Query {
    contributor(slug: $slug) {
      ...ContributorHTMLHeadFragment
      ...ContributorDetailFragment
    }
  }
`;
