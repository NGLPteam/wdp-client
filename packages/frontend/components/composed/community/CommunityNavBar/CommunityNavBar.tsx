import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { SearchButton } from "components/atomic";
import { CommunityNavBarFragment$key } from "@/relay/CommunityNavBarFragment.graphql";
import { CommunityNavBarEntityFragment$key } from "@/relay/CommunityNavBarEntityFragment.graphql";
import CommunityName from "../CommunityName";
import CommunityNavList from "../CommunityNavList";
import * as Styled from "./CommunityNavBar.styles";

export default function CommunityNavBar({ data, entityData }: Props) {
  const community = useMaybeFragment(fragment, data);
  const entity = useMaybeFragment(entityFragment, entityData);

  return community ? (
    <div className="a-bg-custom10">
      <Styled.Nav className="l-container-wide">
        <div>
          <CommunityName data={community} />
        </div>
        <Styled.RightSide>
          <CommunityNavList data={community} />
          <SearchButton size="lg" data={entity} />
        </Styled.RightSide>
      </Styled.Nav>
    </div>
  ) : null;
}

interface Props {
  data?: CommunityNavBarFragment$key | null;
  entityData?: CommunityNavBarEntityFragment$key | null;
}

const fragment = graphql`
  fragment CommunityNavBarFragment on Community {
    ...CommunityNameFragment
    ...CommunityNavListFragment
  }
`;

const entityFragment = graphql`
  fragment CommunityNavBarEntityFragment on Entity {
    ...SearchButtonFragment
  }
`;
