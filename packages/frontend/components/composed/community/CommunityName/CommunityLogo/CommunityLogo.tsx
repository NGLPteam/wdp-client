import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import Image from "next/legacy/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import { NamedLink } from "components/atomic";
import { CommunityLogoFragment$key } from "@/relay/CommunityLogoFragment.graphql";
import styles from "./CommunityLogo.module.css";

const SIZE = 40;

export default function CommunityLogo({ data, slug }: Props) {
  const logo = useMaybeFragment(fragment, data);

  const image = useMemo(() => (logo?.storage ? logo.original : null), [logo]);

  const width = image?.width || 1;

  const height = image?.height || 1;

  return image && image.url ? (
    <NamedLink href={`/communities/${slug}`}>
      <span>
        <figure
          style={{
            width: (SIZE * width) / height,
            height: pxToRem(SIZE),
            minWidth: pxToRem(SIZE),
          }}
          className={styles.logo}
        >
          <Image
            alt=""
            src={image.url}
            width={image.width || SIZE}
            height={image.height || SIZE}
            layout="responsive"
          />
        </figure>
      </span>
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
