import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import * as Styled from "./CommunityName.styles";
import CommunityLogo from "./CommunityLogo";
import { CommunityNameFragment$key } from "@/relay/CommunityNameFragment.graphql";
import { NamedLink } from "components/atomic";

export default function CommunityName({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  const hideName = useMemo(
    () =>
      community?.logo.storage &&
      community.logo.original.width &&
      community.logo.original.height &&
      Math.floor(
        community.logo.original.width / community.logo.original.height
      ) > 1,
    [community]
  );

  return community ? (
    <Styled.Wrapper className="l-flex l-flex--align-center">
      <>
        {community.logo.storage && <CommunityLogo data={community.logo} />}
        <h4 className={hideName ? "a-hidden" : undefined}>
          <NamedLink
            route="community"
            routeParams={{ slug: community.slug }}
            passHref
          >
            <a>{community.title}</a>
          </NamedLink>
        </h4>
      </>
    </Styled.Wrapper>
  ) : null;
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
