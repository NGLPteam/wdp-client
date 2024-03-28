import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { Link, NamedLink } from "components/atomic";
import { CommunityNameFragment$key } from "@/relay/CommunityNameFragment.graphql";
import * as Styled from "./CommunityName.styles";
import CommunityLogo from "./CommunityLogo";

export default function CommunityName({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  const hideName = useMemo(
    () =>
      community &&
      community.logo.original.width &&
      community.logo.original.height &&
      Math.floor(
        community.logo.original.width / community.logo.original.height,
      ) > 1,
    [community],
  );

  return (
    <Styled.Wrapper className="l-flex l-flex--align-center">
      <>
        <CommunityLogo data={community?.logo} slug={community?.slug} />
        <h4 className={hideName ? "a-hidden" : undefined}>
          <NamedLink
            href={
              community?.slug
                ? `/communities/${community.slug}`
                : "/communities"
            }
          >
            <Link as="span">{community?.title}</Link>
          </NamedLink>
        </h4>
      </>
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
