import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { getRouteByEntityKind } from "helpers";
import { BreadcrumbLinkFragment$key } from "@/relay/BreadcrumbLinkFragment.graphql";
import NamedLink from "@/components/atomic/links/NamedLink";
import styles from "./Breadcrumbs.module.css";

interface Props {
  data: BreadcrumbLinkFragment$key | null;
}

export default function BreadcrumbLink({ data }: Props) {
  const crumb = useMaybeFragment(fragment, data);

  const route = getRouteByEntityKind(crumb?.kind);

  if (!crumb?.slug || !route) return null;

  return (
    <NamedLink href={`/${route}/${crumb.slug}`}>
      <span className={styles.text}>{crumb.label}</span>
    </NamedLink>
  );
}

export const fragment = graphql`
  fragment BreadcrumbLinkFragment on EntityBreadcrumb {
    label
    kind
    slug
  }
`;
