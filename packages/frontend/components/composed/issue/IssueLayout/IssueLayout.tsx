import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import IssueHero from "../IssueHero";
import IssueContent from "../IssueContent";
import { BreadcrumbsBar } from "components/layout";
import { IssueLayoutFragment$key } from "@/relay/IssueLayoutFragment.graphql";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";

export default function IssueLayout({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);

  return (
    <>
      <EntityHTMLHead data={issue} />
      <BreadcrumbsBar data={issue} />
      <IssueHero data={issue} />
      <IssueContent data={issue} />
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
    ...IssueContentFragment
  }
`;
