import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import type { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";
import { PageHeader, ContentSidebar, ContentHeader } from "components/layout";
import { useChildRouteLinks, useMaybeFragment, useRouteSlug } from "hooks";
import { RouteHelper } from "routes";
import { useTranslation } from "react-i18next";

export default function CommunityLayout({
  children,
  showSidebar = false,
  data,
  useRouteHeader = true,
}: {
  children: ReactNode;
  showSidebar?: boolean;
  data?: CommunityLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const community = useMaybeFragment(fragment, data);
  const activeRoute = RouteHelper.activeRoute();
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("community.manage", { slug });
  const tabRoutes = useChildRouteLinks("community", { slug });

  return (
    <section>
      <PageHeader title={community?.name} tabRoutes={tabRoutes} />
      {showSidebar ? (
        <ContentSidebar sidebarLinks={manageRoutes}>
          {useRouteHeader && activeRoute && activeRoute.label && (
            <ContentHeader
              headerStyle="secondary"
              title={t(`navLabels.${activeRoute.label}`)}
            />
          )}
          {children}
        </ContentSidebar>
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
