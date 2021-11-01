import React, { ReactNode, useCallback } from "react";
import { graphql } from "react-relay";
import type { CollectionLayoutFragment$key } from "@/relay/CollectionLayoutFragment.graphql";
import { ContentHeader, ContentSidebar, PageHeader } from "components/layout";
import {
  ButtonControlGroup,
  ButtonControlDrawer,
  ButtonControlConfirm,
} from "components/atomic";
import { RouteHelper } from "routes";
import { useTranslation } from "react-i18next";
import {
  useMaybeFragment,
  useRouteSlug,
  useChildRouteLinks,
  useLatestPresentValue,
  useDestroyer,
} from "hooks";
import useBreadcrumbs from "hooks/useBreadcrumbs";
import { useRouter } from "next/router";

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
  const destroy = useDestroyer();
  const router = useRouter();

  const handleDelete = useCallback(
    (hideDialog) => {
      if (memoizedCollection && breadcrumbs && breadcrumbs.length > 0) {
        destroy.collection(
          { collectionId: memoizedCollection.id },
          memoizedCollection.title || "glossary.item"
        );
        hideDialog();
        router.replace(breadcrumbs[breadcrumbs.length - 1]?.href);
      }
    },
    [memoizedCollection, breadcrumbs, destroy, router]
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
      <ButtonControlDrawer
        drawer="addCollection"
        drawerQuery={{
          drawerSlug: slug,
        }}
        icon="plus"
      >
        {t("actions.add.collection")}
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
        title={memoizedCollection?.title}
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
  fragment CollectionLayoutFragment on Collection {
    title
    slug
    id
    ...useBreadcrumbsFragment
  }
`;
