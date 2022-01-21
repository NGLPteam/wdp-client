import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import Image from "next/image";
import * as Styled from "./CommunityName.styles";
import { CommunityNameFragment$key } from "@/relay/CommunityNameFragment.graphql";
import { NamedLink } from "components/atomic";

export default function CommunityName({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  const logo = useMemo(
    () => (community?.logo?.storage ? community.logo.original : null),
    [community]
  );

  const width = logo?.width || 1;

  const height = logo?.height || 1;

  return community ? (
    <Styled.Wrapper className="l-flex l-flex--align-center">
      <>
        {logo && logo.url && (
          <Styled.Logo style={{ width: (40 * width) / height }}>
            <Image
              alt=""
              src={logo.url}
              width={logo.width || 40}
              height={logo.height || 40}
              layout="responsive"
            />
          </Styled.Logo>
        )}
        <h4
          className={
            logo && Math.floor(width / height) > 1 ? "a-hidden" : undefined
          }
        >
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
        url
        width
        height
      }
    }
  }
`;
