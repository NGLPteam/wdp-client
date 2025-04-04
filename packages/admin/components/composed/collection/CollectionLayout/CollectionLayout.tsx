import React, { useCallback } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { ContentHeader, ContentSidebar, PageHeader } from "components/layout";
import { ButtonControlGroup, ButtonControlConfirm } from "components/atomic";
import UnauthorizedMessage from "components/auth/UnauthorizedMessage";
import { RouteHelper } from "routes";
import {
  useMaybeFragment,
  useRouteSlug,
  useChildRouteLinks,
  useLatestPresentValue,
  useDestroyer,
  useIsAuthorized,
} from "hooks";
import useBreadcrumbs from "hooks/useBreadcrumbs";
import ItemCreateButton from "components/composed/item/ItemCreateButton";
import { ButtonControlView } from "components/atomic/buttons/ButtonControl";
import type { CollectionLayoutFragment$key } from "@/relay/CollectionLayoutFragment.graphql";
import CollectionCreateButton from "../CollectionCreateButton";

export default function CollectionLayout({
  children,
  showSidebar = false,
  data,
  useRouteHeader = true,
}: {
  children: React.ReactNode;
  showSidebar?: boolean;
  data?: CollectionLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const collection = useMaybeFragment(fragment, data);
  const { current: memoizedCollection } = useLatestPresentValue(collection);
  const activeRoute = RouteHelper.activeRoute();
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks(
    "collection.manage",
    { slug },
    collection,
  );
  const tabRoutes = useChildRouteLinks("collection", { slug }, collection);
  const breadcrumbs = useBreadcrumbs(memoizedCollection || null);
  const destroy = useDestroyer();
  const router = useRouter();

  const handleDelete = useCallback(
    (hideDialog: () => void) => {
      if (memoizedCollection && breadcrumbs && breadcrumbs.length > 0) {
        destroy.collection(
          { collectionId: memoizedCollection.id },
          memoizedCollection.title || "glossary.item",
        );
        hideDialog();
        router.replace(breadcrumbs[breadcrumbs.length - 1]?.href);
      }
    },
    [memoizedCollection, breadcrumbs, destroy, router],
  );

  const allowsChildItems =
    !!memoizedCollection?.schemaVersion?.enforcedChildKinds.includes("ITEM");
  const allowsChildCollections =
    !!memoizedCollection?.schemaVersion?.enforcedChildKinds.includes(
      "COLLECTION",
    );

  const isAuthorized = useIsAuthorized({ actions: ["self.update"] });

  const message = (
    <div className="t-rte">
      <p>
        Your account currently does not have access to this collection.
        <br /> Please check with your account manager if you need access to this
        content.
      </p>
    </div>
  );

  if (memoizedCollection && !isAuthorized)
    return (
      <UnauthorizedMessage
        title={t("messages.unauthorized")}
        message={message}
      />
    );

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      {allowsChildItems && <ItemCreateButton parentSlug={slug} />}
      {allowsChildCollections && <CollectionCreateButton parentSlug={slug} />}
      <ButtonControlView
        href={`${process.env.NEXT_PUBLIC_FE_URL}/collections/${slug}`}
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
        title={memoizedCollection?.title}
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
  fragment CollectionLayoutFragment on Collection {
    title
    slug
    id
    schemaVersion {
      enforcedChildKinds
    }
    ...useBreadcrumbsFragment
    ...useChildRouteLinksFragment
  }
`;
