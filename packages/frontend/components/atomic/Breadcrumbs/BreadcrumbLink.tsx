import React from "react";
import { graphql } from "relay-runtime";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NamedLink } from "..";
import { getRouteByEntityKind } from "helpers";
import { BreadcrumbLinkFragment$key } from "@/relay/BreadcrumbLinkFragment.graphql";

export default function BreadcrumbLink({ data }: Props) {
  const crumb = useMaybeFragment(fragment, data);

  const route = getRouteByEntityKind(crumb?.kind);

  if (!crumb?.slug || !route) return null;

  return (
    <NamedLink route={route} routeParams={{ slug: crumb.slug }}>
      <a>{crumb.label}</a>
    </NamedLink>
  );
}

interface Props {
  data: BreadcrumbLinkFragment$key | null;
}

export const fragment = graphql`
  fragment BreadcrumbLinkFragment on EntityBreadcrumb {
    label
    kind
    slug
  }
`;
