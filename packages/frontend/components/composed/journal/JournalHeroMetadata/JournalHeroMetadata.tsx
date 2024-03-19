import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { CCLicense, OpenAccess, PeerReviewed, ISSN } from "components/atomic";
import { JournalHeroMetadataFragment$key } from "@/relay/JournalHeroMetadataFragment.graphql";

export default function JournalHeroMetadata({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return journal ? (
    <>
      <ISSN data={journal} />
      <CCLicense data={journal} />
      <OpenAccess data={journal} />
      <PeerReviewed data={journal} />
    </>
  ) : null;
}

interface Props {
  data?: JournalHeroMetadataFragment$key | null;
}

const fragment = graphql`
  fragment JournalHeroMetadataFragment on Collection {
    ...ISSNFragment
    ...OpenAccessFragment
    ...CCLicenseFragment
    ...PeerReviewedFragment
  }
`;
