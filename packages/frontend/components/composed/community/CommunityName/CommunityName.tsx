import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { CommunityNameFragment$key } from "@/relay/CommunityNameFragment.graphql";
import * as Styled from "./CommunityName.styles";
import CommunityNameContent from "./CommunityNameContent";

export default function CommunityName({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

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

interface Props {
  data?: CommunityNameFragment$key | null;
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
