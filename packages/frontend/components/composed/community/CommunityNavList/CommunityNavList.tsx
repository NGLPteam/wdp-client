import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { CommunityNavListFragment$key } from "@/relay/CommunityNavListFragment.graphql";
import CommunityNavListContent from "./CommunityNavListContent";
import * as Styled from "./CommunityNavList.styles";

export default function CommunityNavList({ condensed, mobile, data }: Props) {
  const ListComponent = mobile ? Styled.MobileNavList : Styled.NavList;

  const community = useMaybeFragment(fragment, data);

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
