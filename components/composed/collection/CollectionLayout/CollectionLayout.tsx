import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import type { CollectionLayoutFragment$key } from "@/relay/CollectionLayoutFragment.graphql";
import { ContentHeader, ContentSidebar, PageHeader } from "components/layout";
import { RouteHelper } from "routes";
import { useTranslation } from "react-i18next";
import {
  useBreadcrumbs,
  useMaybeFragment,
  useRouteSlug,
  useChildRouteLinks,
  useLatestPresentValue,
} from "hooks";

export default function CollectionLayout({
  children,
  showSidebar = false,
  data,
  useRouteHeader = true,
}: {
  children: ReactNode;
  showSidebar?: boolean;
  data?: CollectionLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const collection = useMaybeFragment(fragment, data);
  const { current: memoizedCollection } = useLatestPresentValue(collection);
  const activeRoute = RouteHelper.activeRoute();
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("collection.manage", { slug });
  const tabRoutes = useChildRouteLinks("collection", { slug });
  const breadcrumbs = useBreadcrumbs(memoizedCollection || null);

  return (
    <section>
      <PageHeader
        title={memoizedCollection?.title}
        breadcrumbsProps={{ data: breadcrumbs }}
        tabRoutes={tabRoutes}
        sidebarLinks={manageRoutes}
      />
      {showSidebar ? (
        <ContentSidebar sidebarLinks={manageRoutes}>
          {useRouteHeader && activeRoute && activeRoute.label && (
            <ContentHeader
              headerStyle="secondary"
              title={t(activeRoute.label)}
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
  fragment CollectionLayoutFragment on Collection {
    title
    slug
    ...useBreadcrumbsFragment
  }
`;
