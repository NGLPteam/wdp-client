"use client";

import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { graphql, useFragment } from "react-relay";
import { PortalCommunityNavListFragment$key } from "@/relay/PortalCommunityNavListFragment.graphql";
import CommunityNavListContent from "./CommunityNavListContent";

export default function Portal({
  data,
}: {
  data?: PortalCommunityNavListFragment$key;
}) {
  const community = useFragment(fragment, data);

  const [portalEls, setPortalEls] = useState<NodeList>();

  useEffect(() => {
    const els = document.querySelectorAll(`[data-community-nav-list-portal]`);
    if (els) setPortalEls(els);
  }, []);

  return community?.slug ? (
    <>
      {portalEls
        ? Array.from(portalEls).map((portal) => {
            const portalEl = portal as HTMLElement;
            return createPortal(
              <CommunityNavListContent
                data={community}
                mobile={portalEl.getAttribute("data-mobile") === "true"}
                condensed={portalEl.getAttribute("data-condensed") === "true"}
              />,
              portalEl,
            );
          })
        : null}
    </>
  ) : null;
}

export const fragment = graphql`
  fragment PortalCommunityNavListFragment on Community {
    slug
    ...CommunityNavListContentFragment
  }
`;
