import React, { useCallback } from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { ItemLayoutFragment$key } from "__generated__/ItemLayoutFragment.graphql";
import {
  useRouteSlug,
  useMaybeFragment,
  useChildRouteLinks,
  useLatestPresentValue,
  useDestroyer,
} from "hooks";
import { useViewerContext } from "contexts";
import useBreadcrumbs from "hooks/useBreadcrumbs";
import { RouteHelper } from "routes";
import {
  ButtonControlGroup,
  ButtonControlConfirm,
  ButtonControlRoute,
} from "components/atomic";
import { ContentSidebar, ContentHeader, PageHeader } from "components/layout";
import { ButtonControlView } from "components/atomic/buttons/ButtonControl";
import EntityPurgeModal from "components/composed/entity/EntityPurgeModal";
import ItemCreateButton from "../ItemCreateButton";

export default function ItemLayout({
  children,
  showSidebar = false,
  data,
  useRouteHeader = true,
}: {
  children: React.ReactNode;
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
    (hideDialog: () => void) => {
      if (memoizedItem && breadcrumbs) {
        destroy.item(
          { itemId: memoizedItem.id },
          memoizedItem.title || "glossary.item",
        );
        hideDialog();
        router.replace(breadcrumbs[breadcrumbs.length - 2]?.href ?? "/items");
      }
    },
    [memoizedItem, breadcrumbs, destroy, router],
  );

  const { globalAdmin } = useViewerContext();

  const deleteButton =
    globalAdmin && memoizedItem ? (
      <EntityPurgeModal
        id={memoizedItem.id}
        title={memoizedItem.title}
        entityType="item"
        handleDelete={handleDelete}
        redirectPath={breadcrumbs?.[breadcrumbs.length - 2]?.href ?? "/items"}
      />
    ) : (
      <ButtonControlConfirm
        modalLabel={t("messages.delete.confirm_label")}
        modalBody={t("messages.delete.confirm_body")}
        icon="delete"
        onClick={handleDelete}
        actions="self.delete"
      >
        {t("common.delete")}
      </ButtonControlConfirm>
    );

  const buttons = (
    <ButtonControlGroup
      toggleLabel={t("options")}
      menuLabel={t("options")}
      breakpoint={70}
    >
      <ItemCreateButton parentSlug={slug} />
      <ButtonControlView
        href={`${process.env.NEXT_PUBLIC_FE_URL}/items/${slug}`}
      >
        {t("common.view")}
      </ButtonControlView>
      {memoizedItem?.harvestModificationStatus !== "UNHARVESTED" && (
        <ButtonControlRoute
          route="harvestRecord"
          query={{ slug: memoizedItem?.harvestRecords?.[0].slug }}
          icon="linkExternal"
        >
          {t("harvesting.view_entity_record")}
        </ButtonControlRoute>
      )}
      {deleteButton}
    </ButtonControlGroup>
  );

  return (
    <section>
      <PageHeader
        data={memoizedItem}
        title={memoizedItem?.title}
        breadcrumbsProps={breadcrumbs ? { data: breadcrumbs } : undefined}
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
    harvestModificationStatus
    harvestRecords {
      slug
    }
    ...ContentHeaderFragment
    ...useBreadcrumbsFragment
    ...useChildRouteLinksFragment
  }
`;
