"use client";

import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { graphql, useFragment } from "react-relay";
import { PortalCommunityNameFragment$key } from "@/relay/PortalCommunityNameFragment.graphql";
import CommunityNameContent from "./CommunityNameContent";

export default function Portal({
  data,
}: {
  data?: PortalCommunityNameFragment$key;
}) {
  const community = useFragment(fragment, data);

  const [portalEls, setPortalEls] = useState<NodeList>();

  useEffect(() => {
    const els = document.querySelectorAll(
      `[data-community-name-portal]:not([data-active="true"])`,
    );
    if (els) setPortalEls(els);
  }, []);

  return community ? (
    <>
      {portalEls
        ? Array.from(portalEls).map((portal) => {
            const portalEl = portal as HTMLElement;
            return createPortal(
              <CommunityNameContent community={community} />,
              portalEl,
            );
          })
        : null}
    </>
  ) : null;
}

const fragment = graphql`
  fragment PortalCommunityNameFragment on Community {
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
