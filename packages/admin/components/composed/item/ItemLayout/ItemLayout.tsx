import React, { ReactNode, useCallback } from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import ItemCreateButton from "../ItemCreateButton";
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
import { ButtonControlGroup, ButtonControlConfirm } from "components/atomic";
import { ContentSidebar, ContentHeader, PageHeader } from "components/layout";
import { ButtonControlView } from "components/atomic/buttons/ButtonControl";

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
  const manageRoutes = useChildRouteLinks("item.manage", { slug }, item);
  const tabRoutes = useChildRouteLinks("item", { slug }, item);
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
        router.replace(breadcrumbs[breadcrumbs.length - 2]?.href);
      }
    },
    [memoizedItem, breadcrumbs, destroy, router]
  );

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ItemCreateButton parentSlug={slug} />
      <ButtonControlView
        href={`${process.env.NEXT_PUBLIC_FE_URL}/items/${slug}`}
      >
        {t("common.view")}
      </ButtonControlView>
      <ButtonControlConfirm
        modalLabel={t("messages.delete.confirm_label")}
        modalBody={t("messages.delete.confirm_body")}
        icon="delete"
        onClick={handleDelete}
        actions="self.delete"
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
    ...useChildRouteLinksFragment
  }
`;
