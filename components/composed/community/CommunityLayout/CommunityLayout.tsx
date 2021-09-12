import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import type { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";
import { PageHeader, ContentSidebar } from "components/layout";
import { useChildRouteLinks, useMaybeFragment, useRouteSlug } from "hooks";

export default function CommunityLayout({
  children,
  showSidebar = false,
  data,
}: {
  children: ReactNode;
  showSidebar?: boolean;
  data?: CommunityLayoutFragment$key | null;
}) {
  const community = useMaybeFragment(fragment, data);

  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("community.manage", { slug });
  const tabRoutes = useChildRouteLinks("community", { slug });

  return (
    <section>
      <PageHeader title={community?.name} tabRoutes={tabRoutes} />
      {showSidebar ? (
        <ContentSidebar sidebarLinks={manageRoutes}>{children}</ContentSidebar>
      ) : (
        children
      )}
    </section>
  );
}

const fragment = graphql`
  fragment CommunityLayoutFragment on Community {
    name
    slug
    ...useBreadcrumbsFragment
  }
`;
