import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import { ItemLayoutFragment$key } from "__generated__/ItemLayoutFragment.graphql";
import {
  useBreadcrumbs,
  useRouteSlug,
  useMaybeFragment,
  useChildRouteLinks,
} from "hooks";
import { RouteHelper } from "routes";
import { useTranslation } from "react-i18next";

import { ContentSidebar, PageHeader } from "components/layout";

export default function ItemLayout({
  children,
  showSidebar = false,
  data,
}: {
  children: ReactNode;
  showSidebar?: boolean;
  data?: ItemLayoutFragment$key | null;
}) {
  const item = useMaybeFragment(fragment, data);
  const breadcrumbs = useBreadcrumbs(item || null);
  const activeRoute = RouteHelper.activeRoute();
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("item.manage", { slug });
  const tabRoutes = useChildRouteLinks("item", { slug });

  return (
    <section>
      <PageHeader
        title={item?.title}
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
  fragment ItemLayoutFragment on Item {
    title
    slug
    ...useBreadcrumbsFragment
  }
`;
