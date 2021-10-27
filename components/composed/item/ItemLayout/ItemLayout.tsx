import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import { ItemLayoutFragment$key } from "__generated__/ItemLayoutFragment.graphql";
import {
  useRouteSlug,
  useMaybeFragment,
  useChildRouteLinks,
  useLatestPresentValue,
} from "hooks";
import useBreadcrumbs from "hooks/useBreadcrumbs";
import { RouteHelper } from "routes";
import { useTranslation } from "react-i18next";
import { ButtonControlGroup, ButtonControlDrawer } from "components/atomic";
import { ContentSidebar, ContentHeader, PageHeader } from "components/layout";

export default function ItemLayout({
  children,
  showSidebar = false,
  data,
  useRouteHeader = true,
}: {
  children: ReactNode;
  showSidebar?: boolean;
  data?: ItemLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const item = useMaybeFragment(fragment, data);
  const { current: memoizedItem } = useLatestPresentValue(item);
  const breadcrumbs = useBreadcrumbs(memoizedItem || null);
  const activeRoute = RouteHelper.activeRoute();
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("item.manage", { slug });
  const tabRoutes = useChildRouteLinks("item", { slug });

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addItem"
        drawerQuery={{
          drawerSlug: slug,
        }}
        icon="plus"
      >
        {t("actions.add.item")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <section>
      <PageHeader
        title={memoizedItem?.title}
        breadcrumbsProps={{ data: breadcrumbs }}
        tabRoutes={tabRoutes}
        sidebarLinks={manageRoutes}
        buttons={buttons}
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
  fragment ItemLayoutFragment on Item {
    title
    slug
    ...useBreadcrumbsFragment
  }
`;
