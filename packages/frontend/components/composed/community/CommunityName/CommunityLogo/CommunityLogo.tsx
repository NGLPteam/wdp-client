import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import Image from "next/legacy/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import { NamedLink } from "components/atomic";
import { CommunityLogoFragment$key } from "@/relay/CommunityLogoFragment.graphql";
import * as Styled from "./CommunityLogo.styles";

const SIZE = 40;

export default function CommunityLogo({ data, slug }: Props) {
  const logo = useMaybeFragment(fragment, data);

  const image = useMemo(() => (logo?.storage ? logo.original : null), [logo]);

  const width = image?.width || 1;

  const height = image?.height || 1;

  return image && image.url ? (
    <NamedLink route="community" routeParams={{ slug: slug || "" }} passHref>
      <a className="do-not-apply-default">
        <Styled.Logo
          style={{
            width: (SIZE * width) / height,
            height: pxToRem(SIZE),
            minWidth: pxToRem(SIZE),
          }}
        >
          <Image
            alt=""
            src={image.url}
            width={image.width || SIZE}
            height={image.height || SIZE}
            layout="responsive"
          />
        </Styled.Logo>
      </a>
    </NamedLink>
  ) : null;
}

interface Props {
  data?: CommunityLogoFragment$key | null;
  slug?: string;
}

const fragment = graphql`
  fragment CommunityLogoFragment on ImageAttachment {
    storage
    original {
      url
      width
      height
    }
  }
`;
