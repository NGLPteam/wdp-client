import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./JournalHeroCompact.styles";
import { JournalHeroCompactFragment$key } from "@/relay/JournalHeroCompactFragment.graphql";

export default function JournalHeroCompact({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return journal ? (
    <Styled.Wrapper className="l-container-wide">
      <Styled.Title>{journal.title}</Styled.Title>
      {journal.subtitle && (
        <Styled.Subtitle>{journal.subtitle}</Styled.Subtitle>
      )}
    </Styled.Wrapper>
  ) : null;
}

interface Props {
  data?: JournalHeroCompactFragment$key | null;
}

const fragment = graphql`
  fragment JournalHeroCompactFragment on Collection {
    title
    subtitle
  }
`;
