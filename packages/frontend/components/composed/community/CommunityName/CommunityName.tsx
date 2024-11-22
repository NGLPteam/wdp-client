import { useContext } from "react";
import { graphql, useFragment } from "react-relay";
import { CommunityNameFragment$key } from "@/relay/CommunityNameFragment.graphql";
import { CommunityContext } from "@/contexts/CommunityContext";
import * as Styled from "./CommunityName.styles";
import CommunityNameContent from "./CommunityNameContent";

export default function CommunityName() {
  const communityData = useContext(CommunityContext);
  const community = useFragment<CommunityNameFragment$key>(
    fragment,
    communityData,
  );

  return (
    <Styled.Wrapper
      className="l-flex l-flex--align-center"
      data-community-name-portal
      data-active={!!community}
    >
      {community && <CommunityNameContent community={community} />}
    </Styled.Wrapper>
  );
}

const fragment = graphql`
  fragment CommunityNameFragment on Community {
    title
    slug
    logo {
      storage
      original {
        width
        height
      }
      ...CommunityLogoFragment
    }
  }
`;
