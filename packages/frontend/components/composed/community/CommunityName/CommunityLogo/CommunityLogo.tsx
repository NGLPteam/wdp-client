import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import Image from "next/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import * as Styled from "./CommunityLogo.styles";
import { CommunityLogoFragment$key } from "@/relay/CommunityLogoFragment.graphql";

const SIZE = 40;

export default function CommunityLogo({ data }: Props) {
  const logo = useMaybeFragment(fragment, data);

  const image = useMemo(() => (logo?.storage ? logo.original : null), [logo]);

  const width = image?.width || 1;

  const height = image?.height || 1;

  return image && image.url ? (
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
  ) : null;
}

interface Props {
  data?: CommunityLogoFragment$key | null;
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
