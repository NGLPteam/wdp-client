import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import IssueHero from "../IssueHero";
import { IssueLayoutFragment$key } from "@/relay/IssueLayoutFragment.graphql";

export default function IssueLayout({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);

  return <IssueHero data={issue} />;
}

interface Props {
  data?: IssueLayoutFragment$key | null;
}

const fragment = graphql`
  fragment IssueLayoutFragment on Collection {
    ...IssueHeroFragment
  }
`;
