import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import AccountDropdown from "../../viewer/AccountDropdown";
import CommunityNavList from "../CommunityNavList";
import * as Styled from "./CommunityCondensedNav.styles";
import InstallationName from "components/composed/instance/InstallationName";
import { CommunityCondensedNavFragment$key } from "@/relay/CommunityCondensedNavFragment.graphql";
import { SearchButton } from "components/atomic";

function CommunityCondensedNav({ data, communityData }: Props) {
  const appData = useMaybeFragment(appFragment, data);
  const community = useMaybeFragment(fragment, communityData);

  return (
    <Styled.Header className="a-bg-custom20">
      <Styled.HeaderInner className="l-container-wide">
        {appData && (
          <Styled.LeftSide>
            <InstallationName data={appData} />
          </Styled.LeftSide>
        )}
        <Styled.RightSide>
          {community && <CommunityNavList data={community} condensed />}
          <SearchButton size="sm" />
          <AccountDropdown condensed />
        </Styled.RightSide>
      </Styled.HeaderInner>
    </Styled.Header>
  );
}

interface Props {
  data?: CommunityCondensedNavAppFragment$key | null;
  communityData?: CommunityCondensedNavFragment$key | null;
}

export default CommunityCondensedNav;

const appFragment = graphql`
  fragment CommunityCondensedNavAppFragment on Query {
    ...InstallationNameFragment
  }
`;

const fragment = graphql`
  fragment CommunityCondensedNavFragment on Community {
    ...CommunityNavListFragment
  }
`;
