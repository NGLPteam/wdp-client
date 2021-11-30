import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import JournalHero from "../JournalHero";
import { BreadcrumbsBar } from "components/layout";
import { JournalLayoutFragment$key } from "@/relay/JournalLayoutFragment.graphql";

export default function JournalLayout({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={journal} />
      <JournalHero data={journal} />
    </>
  );
}

interface Props {
  data?: JournalLayoutFragment$key | null;
}

const fragment = graphql`
  fragment JournalLayoutFragment on Collection {
    ...JournalHeroFragment
    ...BreadcrumbsBarFragment
  }
`;