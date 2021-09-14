import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import type { CollectionLayoutFragment$key } from "@/relay/CollectionLayoutFragment.graphql";
import { ContentSidebar, PageHeader } from "components/layout";
import { RouteHelper } from "routes";
import { useTranslation } from "react-i18next";
import {
  useBreadcrumbs,
  useMaybeFragment,
  useRouteSlug,
  useChildRouteLinks,
} from "hooks";

export default function CollectionLayout({
  children,
  showSidebar = false,
  data,
}: {
  children: ReactNode;
  showSidebar?: boolean;
  data?: CollectionLayoutFragment$key | null;
}) {
  const collection = useMaybeFragment(fragment, data);
  const breadcrumbs = useBreadcrumbs(collection || null);
  const activeRoute = RouteHelper.activeRoute();
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("collection.manage", { slug });
  const tabRoutes = useChildRouteLinks("collection", { slug });

  return (
    <section>
      <PageHeader
        title={collection?.title}
        breadcrumbsProps={{ data: breadcrumbs }}
        tabRoutes={tabRoutes}
      />
      {showSidebar ? (
        <ContentSidebar sidebarLinks={manageRoutes}>
          {activeRoute && activeRoute.label && (
            <PageHeader
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
  fragment CollectionLayoutFragment on Collection {
    title
    slug
    ...useBreadcrumbsFragment
  }
`;
