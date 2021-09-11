import React, { ReactNode, useMemo } from "react";
import { graphql } from "react-relay";
import type { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";
import { PageHeader, ContentSidebar } from "components/layout";
import { useMaybeFragment, useRouteSlug } from "hooks";
import { useTranslation } from "react-i18next";

import { RouteHelper } from "routes";
import capitalize from "lodash/capitalize";

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
  const { t } = useTranslation();
  const mainRoute = RouteHelper.findRouteByName("community.manage");
  const slug = useRouteSlug() || undefined;

  // Get the community's child routes with current query
  const childRoutes = useMemo(() => {
    return mainRoute?.routes
      ? mainRoute.routes.map((route) => ({ ...route, query: { slug } }))
      : undefined;
  }, [slug, mainRoute]);

  const tabRoutes = [
    {
      label: "Child Collections",
      route: `community.child.collections`,
    },
    {
      label: "Manage",
      route: `community.manage`,
    },
  ];

  // Build breadcrumbs
  const breadcrumbs = useMemo(() => {
    const parentRoute = RouteHelper.findRouteByName("communities");
    return parentRoute && mainRoute
      ? {
          data: [
            {
              href: { pathname: parentRoute.path },
              label: capitalize(t("glossary.community.label", { count: 2 })),
            },
            {
              href: { pathname: mainRoute.path, query: { slug } },
              label: community?.name,
            },
          ],
        }
      : undefined;
  }, [community, mainRoute, t, slug]);

  return (
    <section>
      <PageHeader
        title={community?.name}
        breadcrumbsProps={breadcrumbs}
        tabRoutes={tabRoutes}
      />
      {showSidebar ? (
        <ContentSidebar sidebarLinks={childRoutes}>{children}</ContentSidebar>
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
