import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NavSearch } from "components/global";
import JournalNavList from "../JournalNavList";
import { JournalNavBarFragment$key } from "@/relay/JournalNavBarFragment.graphql";
import * as Styled from "./JournalNavBar.styles";

export default function JournalNavBar({ data }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return journal ? (
    <Styled.Nav className="a-bg-custom20">
      <Styled.NavInner className="l-container-wide">
        <Styled.LeftSide>
          <JournalNavList data={journal} />
        </Styled.LeftSide>
        <Styled.RightSide>
          <NavSearch name={journal.title} />
        </Styled.RightSide>
      </Styled.NavInner>
    </Styled.Nav>
  ) : null;
}

type Props = {
  data?: JournalNavBarFragment$key | null;
};

const fragment = graphql`
  fragment JournalNavBarFragment on Collection {
    title
    ...JournalNavListFragment
  }
`;
