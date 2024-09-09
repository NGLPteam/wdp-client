import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { getRouteByEntityKind } from "helpers";
import { BreadcrumbLinkFragment$key } from "@/relay/BreadcrumbLinkFragment.graphql";
import { Dropdown, Link, NamedLink } from "..";

interface Props {
  data: BreadcrumbLinkFragment$key | null;
  isDropdown?: boolean;
}

export default function BreadcrumbLink({ data, isDropdown }: Props) {
  const crumb = useMaybeFragment(fragment, data);

  const route = getRouteByEntityKind(crumb?.kind);

  if (!crumb?.slug || !route) return null;

  return isDropdown ? (
    <NamedLink href={`/${route}/${crumb.slug}`}>
      <Link as="span">{crumb.label}</Link>
    </NamedLink>
  ) : (
    <Dropdown.Link href={`/${route}/${crumb.slug}`} label={crumb.label} />
  );
}

export const fragment = graphql`
  fragment BreadcrumbLinkFragment on EntityBreadcrumb {
    label
    kind
    slug
  }
`;
