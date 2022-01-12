import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import IssueHero from "../IssueHero";
import { CollectionContributionsBlock } from "components/composed/contribution/ContributionsBlock";
import { BreadcrumbsBar } from "components/layout";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";
import RelatedIssues from "components/composed/issue/RelatedIssues";
import { IssueLayoutFragment$key } from "@/relay/IssueLayoutFragment.graphql";

export default function IssueLayout({ data, children }: Props) {
  const issue = useMaybeFragment(fragment, data);

  return (
    <>
      <EntityHTMLHead data={issue} />
      <BreadcrumbsBar data={issue} />
      <IssueHero data={issue} />
      {children}
      <CollectionContributionsBlock data={issue?.contributions} />
      <RelatedIssues data={issue?.relatedCollections} />
    </>
  );
}

interface Props {
  data?: IssueLayoutFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment IssueLayoutFragment on Collection {
    ...EntityHTMLHeadFragment
    ...BreadcrumbsBarFragment
    ...IssueHeroFragment
    contributions {
      ...CollectionContributionsBlockFragment
    }
    relatedCollections(page: 1, perPage: 4) {
      ...RelatedIssuesFragment
    }
  }
`;
