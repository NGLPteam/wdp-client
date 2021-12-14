import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import JournalHero from "../JournalHero";
import JournalNavBar from "../JournalNavBar";
import CurrentIssue from "../CurrentIssue";
import { BreadcrumbsBar } from "components/layout";
import { JournalLayoutFragment$key } from "@/relay/JournalLayoutFragment.graphql";
import RelatedJournals from "components/composed/journal/RelatedJournals";
import FeaturedIssues from "components/composed/issue/FeaturedIssues";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";

export default function JournalLayout({ data, children }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return (
    <>
      <EntityHTMLHead data={journal} />
      <BreadcrumbsBar data={journal} />
      <JournalHero data={journal} />
      <JournalNavBar data={journal} />
      {children}
      <CurrentIssue data={journal?.currentIssue} />
      <FeaturedIssues data={journal?.issues} />
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
    ...EntityHTMLHeadFragment
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
      page: 1
      perPage: 4
    ) {
      ...FeaturedIssuesFragment
    }
    currentIssue: firstCollection(
      schema: "nglp:journal_issue"
      order: PUBLISHED_DESCENDING
      nodeFilter: DESCENDANTS
    ) {
      ...CurrentIssueFragment
    }
  }
`;
