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
  useIsAuthorized,
} from "hooks";
import useBreadcrumbs from "hooks/useBreadcrumbs";
import { RouteHelper } from "routes";
import { ButtonControlGroup, ButtonControlConfirm } from "components/atomic";
import { ContentSidebar, ContentHeader, PageHeader } from "components/layout";
import { ButtonControlView } from "components/atomic/buttons/ButtonControl";
import UnauthorizedMessage from "components/auth/UnauthorizedMessage";
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

  const isAuthorized = useIsAuthorized({ actions: ["self.update"] });

  const message = (
    <div className="t-rte">
      <p>
        Your account currently does not have access to this item.
        <br /> Please check with your account manager if you need access to this
        content.
      </p>
    </div>
  );

  if (memoizedItem && !isAuthorized)
    return (
      <UnauthorizedMessage
        title={t("messages.unauthorized")}
        message={message}
      />
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
    ...useBreadcrumbsFragment
    ...useChildRouteLinksFragment
  }
`;
