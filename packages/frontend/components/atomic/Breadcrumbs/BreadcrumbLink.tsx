import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { getRouteByEntityKind } from "helpers";
import { BreadcrumbLinkFragment$key } from "@/relay/BreadcrumbLinkFragment.graphql";
import { Link, NamedLink } from "..";

export default function BreadcrumbLink({ data }: Props) {
  const crumb = useMaybeFragment(fragment, data);

  const route = getRouteByEntityKind(crumb?.kind);

  if (!crumb?.slug || !route) return null;

  return (
    <NamedLink href={`/${route}/${crumb.slug}`}>
      <Link as="span">{crumb.label}</Link>
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
