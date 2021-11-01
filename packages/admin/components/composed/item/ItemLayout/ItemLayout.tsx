import React, { ReactNode, useCallback } from "react";
import { graphql } from "react-relay";
import { ItemLayoutFragment$key } from "__generated__/ItemLayoutFragment.graphql";
import {
  useRouteSlug,
  useMaybeFragment,
  useChildRouteLinks,
  useLatestPresentValue,
  useDestroyer,
} from "hooks";
import useBreadcrumbs from "hooks/useBreadcrumbs";
import { RouteHelper } from "routes";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import {
  ButtonControlGroup,
  ButtonControlDrawer,
  ButtonControlConfirm,
} from "components/atomic";
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
  const destroy = useDestroyer();
  const router = useRouter();

  const handleDelete = useCallback(
    (hideDialog) => {
      if (memoizedItem && breadcrumbs && breadcrumbs.length > 0) {
        destroy.item(
          { itemId: memoizedItem.id },
          memoizedItem.title || "glossary.item"
        );
        hideDialog();
        router.replace(breadcrumbs[breadcrumbs.length - 1]?.href);
      }
    },
    [memoizedItem, breadcrumbs, destroy, router]
  );

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
      <ButtonControlConfirm
        modalLabel={t("messages.delete.confirm_label")}
        modalBody={t("messages.delete.confirm_body")}
        icon="delete"
        onClick={handleDelete}
      >
        {t("common.delete")}
      </ButtonControlConfirm>
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
    id
    ...useBreadcrumbsFragment
  }
`;
