import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import IssueHero from "../IssueHero";
import ContributionsBlock from "components/composed/contribution/ContributionsBlock";
import { BreadcrumbsBar } from "components/layout";
import RelatedIssues from "components/composed/issue/RelatedIssues";
import { IssueLayoutFragment$key } from "@/relay/IssueLayoutFragment.graphql";

export default function IssueLayout({ data, children }: Props) {
  const issue = useMaybeFragment(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={issue} />
      <IssueHero data={issue} />
      {children}
      <ContributionsBlock data={issue?.contributions} />
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
    ...BreadcrumbsBarFragment
    ...IssueHeroFragment
    contributions {
      ...ContributionsBlockFragment
    }
    relatedCollections(page: 1, perPage: 4) {
      ...RelatedIssuesFragment
    }
  }
`;
