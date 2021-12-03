import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import JournalHero from "../JournalHero";
import JournalNavBar from "../JournalNavBar";
import { BreadcrumbsBar } from "components/layout";
import { JournalLayoutFragment$key } from "@/relay/JournalLayoutFragment.graphql";
import RelatedJournals from "components/composed/journal/RelatedJournals";
import FeaturedIssues from "components/composed/issue/FeaturedIssues";

export default function JournalLayout({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={journal} />
      <JournalHero data={journal} />
      <JournalNavBar data={journal} />
      <FeaturedIssues data={journal?.issues} />
      <RelatedJournals data={journal?.related} />
    </>
  );
}

interface Props {
  data?: JournalLayoutFragment$key | null;
}

const fragment = graphql`
  fragment JournalLayoutFragment on Collection {
    ...JournalHeroFragment
    ...JournalNavBarFragment
    ...BreadcrumbsBarFragment
    related: links(order: RECENT, perPage: 4) {
      ...RelatedJournalsFragment
    }
    issues: collections(
      schema: "nglp:journal_issue"
      order: PUBLISHED_ASCENDING
      nodeFilter: DESCENDANTS
      perPage: 4
    ) {
      ...FeaturedIssuesFragment
    }
  }
`;
