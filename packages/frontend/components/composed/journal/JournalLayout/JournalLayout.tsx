import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { BreadcrumbsBar } from "components/layout";
import RelatedJournals from "components/composed/journal/RelatedJournals";
import EntityNavBar from "components/composed/entity/EntityNavBar";
import { JournalLayoutFragment$key } from "@/relay/JournalLayoutFragment.graphql";
import JournalHero from "../JournalHero";

export default function JournalLayout({ data, children }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={journal} />
      <JournalHero data={journal} />
      <EntityNavBar data={journal} />
      {children}
      <RelatedJournals data={journal?.related} />
    </>
  );
}

interface Props {
  data?: JournalLayoutFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment JournalLayoutFragment on Collection {
    ...JournalHeroFragment
    ...EntityNavBarFragment
    ...BreadcrumbsBarFragment
    related: relatedCollections(order: RECENT, perPage: 4) {
      ...RelatedJournalsFragment
    }
  }
`;
