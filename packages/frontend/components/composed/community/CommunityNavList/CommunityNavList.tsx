import { useContext } from "react";
import { graphql, useFragment } from "react-relay";
import { CommunityNavListFragment$key } from "@/relay/CommunityNavListFragment.graphql";
import { CommunityContext } from "@/contexts/CommunityContext";
import CommunityNavListContent from "./CommunityNavListContent";
import * as Styled from "./CommunityNavList.styles";

export default function CommunityNavList({ condensed, mobile }: Props) {
  const communityData = useContext(CommunityContext);
  const community = useFragment<CommunityNavListFragment$key>(
    fragment,
    communityData,
  );

  const ListComponent = mobile ? Styled.MobileNavList : Styled.NavList;

  return (
    <ListComponent
      $condensed={condensed}
      data-community-nav-list-portal
      data-condensed={condensed}
      data-mobile={mobile}
    >
      {community && <CommunityNavListContent data={community} />}
    </ListComponent>
  );
}

interface Props {
  condensed?: boolean;
  mobile?: boolean;
  data?: CommunityNavListFragment$key | null;
}

const fragment = graphql`
  fragment CommunityNavListFragment on Community {
    ...CommunityNavListContentFragment
  }
`;
