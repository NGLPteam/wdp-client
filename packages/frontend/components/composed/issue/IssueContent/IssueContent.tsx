import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import IssueOrderingLayout from "../IssueOrderingLayout";
import IssueSidebarNav from "../IssueSidebarNav";
import { IssueContentFragment$key } from "@/relay/IssueContentFragment.graphql";

export default function IssueContent({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return (
    <IssueSidebarNav data={entity}>
      <IssueOrderingLayout data={entity?.ordering} />
    </IssueSidebarNav>
  );
}

interface Props {
  data?: IssueContentFragment$key | null;
}

const fragment = graphql`
  fragment IssueContentFragment on Collection
  @argumentDefinitions(page: { type: "Int", defaultValue: 1 }) {
    ...IssueSidebarNavFragment

    ordering(identifier: "articles") {
      ...IssueOrderingLayoutFragment @arguments(page: $page)
    }
  }
`;
