import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import { useChildRouteLinks, useMaybeFragment, useRouteSlug } from "hooks";
import type { ContributorLayoutFragment$key } from "@/relay/ContributorLayoutFragment.graphql";
import { PageHeader, ContentSidebar } from "components/layout";
import ContributorDisplayName from "../ContributorDisplayName";

export default function ContributorLayout({
  children,
  data,
}: {
  children: ReactNode;
  data?: ContributorLayoutFragment$key | null;
  subHead?: boolean;
}) {
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("contributor", { slug });
  const contributor = useMaybeFragment(fragment, data);

  return (
    <section>
      <PageHeader
        title={<ContributorDisplayName contributor={contributor} />}
      />
      <ContentSidebar sidebarLinks={manageRoutes}>{children}</ContentSidebar>
    </section>
  );
}

const fragment = graphql`
  fragment ContributorLayoutFragment on AnyContributor {
    __typename
    ... on OrganizationContributor {
      slug
      legalName
    }
    ... on PersonContributor {
      givenName
      familyName
    }
  }
`;
