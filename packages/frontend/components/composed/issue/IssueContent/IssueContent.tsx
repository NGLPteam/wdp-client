import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./IssueContent.styles";
import IssueContentList from "./IssueContentList";
import { IssueContentFragment$key } from "@/relay/IssueContentFragment.graphql";

export default function IssueContent({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  return (
    <Styled.Section className="a-bg-neutral00">
      <div className="l-container-wide l-grid">
        <div className="l-grid__item l-grid__item--8">
          <IssueContentList data={content?.items} />
        </div>
        <div className="l-grid__item l-grid__item--3 l-grid__item--right"></div>
      </div>
    </Styled.Section>
  );
}

interface Props {
  data?: IssueContentFragment$key | null;
}

const fragment = graphql`
  fragment IssueContentFragment on Collection {
    items {
      ...IssueContentListFragment
    }
  }
`;
