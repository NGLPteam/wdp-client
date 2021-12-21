import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ContributorDetail from "components/composed/contributor/ContributorDetail";
import ContributorHTMLHead from "components/composed/contributor/ContributorHTMLHead";
import { ContributorDetailLayoutFragment$key } from "@/relay/ContributorDetailLayoutFragment.graphql";
import BaseLayout from "components/composed/base/BaseLayout";

export default function ContributorDetailLayout({ data }: Props) {
  const layoutData = useMaybeFragment(fragment, data);

  return layoutData ? (
    <BaseLayout data={layoutData}>
      <ContributorHTMLHead data={layoutData.contributor} />
      <ContributorDetail data={layoutData.contributor} />
    </BaseLayout>
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

    ...BaseLayoutFragment
  }
`;
