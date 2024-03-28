"use client";

import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { graphql, useFragment } from "react-relay";
import { PortalSearchModalFragment$key } from "@/relay/PortalSearchModalFragment.graphql";
import SearchModalContent from "./SearchModalContent";

export default function Portal({
  data,
}: {
  data?: PortalSearchModalFragment$key;
}) {
  const searchData = useFragment(fragment, data);

  const [portalEls, setPortalEls] = useState<NodeList>();

  useEffect(() => {
    const els = document.querySelectorAll(`[data-search-select-portal]`);
    if (els) setPortalEls(els);
  }, []);

  return searchData ? (
    <>
      {portalEls
        ? Array.from(portalEls).map((portal) => {
            const portalEl = portal as HTMLElement;
            return createPortal(
              <SearchModalContent searchData={searchData} />,
              portalEl,
            );
          })
        : null}
    </>
  ) : null;
}

const fragment = graphql`
  fragment PortalSearchModalFragment on Entity {
    __typename
    ... on Sluggable {
      slug
    }
    ... on Entity {
      title
    }
    breadcrumbs {
      crumb {
        __typename
        ... on Sluggable {
          slug
        }
        ... on Entity {
          title
        }
      }
    }
  }
`;
