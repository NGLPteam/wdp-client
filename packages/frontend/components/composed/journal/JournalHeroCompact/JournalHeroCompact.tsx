import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { CompactHero } from "components/layout/hero";
import { Markdown } from "components/atomic";
import { JournalHeroCompactFragment$key } from "@/relay/JournalHeroCompactFragment.graphql";

export default function JournalHeroCompact({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return journal ? (
    <CompactHero
      style="primary"
      title={<Markdown.Title>{journal.title}</Markdown.Title>}
      subtitle={<Markdown.Title>{journal.subtitle}</Markdown.Title>}
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
