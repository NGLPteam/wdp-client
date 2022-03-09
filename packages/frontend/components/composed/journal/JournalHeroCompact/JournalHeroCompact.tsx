import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { JournalHeroCompactFragment$key } from "@/relay/JournalHeroCompactFragment.graphql";
import { CompactHero } from "components/layout/hero";

export default function JournalHeroCompact({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return journal ? (
    <CompactHero
      style="primary"
      title={journal.title}
      subtitle={journal.subtitle}
    />
  ) : null;
}

interface Props {
  data?: JournalHeroCompactFragment$key | null;
}

const fragment = graphql`
  fragment JournalHeroCompactFragment on Collection {
    title
    subtitle
  }
`;
