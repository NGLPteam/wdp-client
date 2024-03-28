"use client";

import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { graphql, useFragment } from "react-relay";
import { PortalCommunityPickerFragment$key } from "@/relay/PortalCommunityPickerFragment.graphql";

export default function Portal({
  data,
}: {
  data?: PortalCommunityPickerFragment$key;
}) {
  const community = useFragment(fragment, data);

  const [portalEls, setPortalEls] = useState<NodeList>();

  useEffect(() => {
    const els = document.querySelectorAll(`[data-community-picker-portal]`);
    if (els) setPortalEls(els);
    if (community?.title) {
      els.forEach((el) => el.setAttribute("data-active", "true"));
    } else {
      els.forEach((el) => el.setAttribute("data-active", "false"));
    }
    return () => els.forEach((el) => el.setAttribute("data-active", "false"));
  }, [community?.title]);

  return community?.title ? (
    <>
      {portalEls
        ? Array.from(portalEls).map((portal) =>
            createPortal(<>{community?.title}</>, portal as HTMLElement),
          )
        : null}
    </>
  ) : null;
}

export const fragment = graphql`
  fragment PortalCommunityPickerFragment on Community {
    title
  }
`;
