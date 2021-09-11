import React, { ReactNode, useMemo } from "react";
import { graphql } from "react-relay";
import type { CollectionLayoutFragment$key } from "@/relay/CollectionLayoutFragment.graphql";
import { ContentSidebar, PageHeader } from "components/layout";
import { useBreadcrumbs, useMaybeFragment, useRouteSlug } from "hooks";
import { useTranslation } from "react-i18next";
import { RouteHelper } from "routes";
import capitalize from "lodash/capitalize";
import type { UrlObject } from "url";

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
  const collectionBreadcrumbs = useBreadcrumbs(collection || null);
  const { t } = useTranslation();
  const mainRoute = RouteHelper.findRouteByName("collection.manage");
  const slug = useRouteSlug() || undefined;

  // Get the collection's child routes with current query
  const childRoutes = useMemo(() => {
    return mainRoute?.routes
      ? mainRoute.routes.map((route) => ({ ...route, query: { slug } }))
      : undefined;
  }, [slug, mainRoute]);

  // Build breadcrumbs
  const breadcrumbs = useMemo(() => {
    const parentRoute = RouteHelper.findRouteByName("collections");
    const crumbs: { href: UrlObject | string; label: string }[] = [];
    if (parentRoute)
      crumbs.push({
        href: { pathname: parentRoute.path },
        label: capitalize(t("glossary.community.label", { count: 2 })),
      });
    return collectionBreadcrumbs
      ? crumbs.concat(collectionBreadcrumbs)
      : crumbs;
  }, [collectionBreadcrumbs, t]);

  const tabRoutes = [
    {
      label: "Child Collections",
      route: `collection.child.collections`,
    },
    {
      label: "Child Items",
      route: `collection.child.items`,
    },
    {
      label: "Manage",
      route: `collection.manage`,
    },
  ];

  return (
    <section>
      <PageHeader
        title={collection?.title}
        breadcrumbsProps={{ data: breadcrumbs }}
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
  fragment CollectionLayoutFragment on Collection {
    title
    slug
    ...useBreadcrumbsFragment
  }
`;
