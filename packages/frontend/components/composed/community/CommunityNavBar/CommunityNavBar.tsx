import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import CommunityName from "../CommunityName";
import CommunityNavList from "../CommunityNavList";
import * as Styled from "./CommunityNavBar.styles";
import { SearchButton } from "components/atomic";
import { CommunityNavBarFragment$key } from "@/relay/CommunityNavBarFragment.graphql";

export default function CommunityNavBar({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  return community ? (
    <div className="a-bg-custom10">
      <Styled.Nav className="l-container-wide">
        <div>
          <CommunityName data={community} />
        </div>
        <Styled.RightSide>
          <CommunityNavList data={community} />
          <SearchButton size="lg" data={community} />
        </Styled.RightSide>
      </Styled.Nav>
    </div>
  ) : null;
}

interface Props {
  data?: CommunityNavBarFragment$key | null;
}

const fragment = graphql`
  fragment CommunityNavBarFragment on Community {
    ...CommunityNameFragment
    ...CommunityNavListFragment
    ...SearchButtonFragment
  }
`;
