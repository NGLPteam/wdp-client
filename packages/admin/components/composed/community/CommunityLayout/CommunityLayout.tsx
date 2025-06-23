import React, { useCallback } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { PageHeader, ContentSidebar, ContentHeader } from "components/layout";
import {
  useChildRouteLinks,
  useMaybeFragment,
  useRouteSlug,
  useLatestPresentValue,
  useDestroyer,
} from "hooks";
import { useViewerContext } from "contexts";
import { RouteHelper } from "routes";
import { ButtonControlConfirm, ButtonControlGroup } from "components/atomic";
import CollectionCreateButton from "components/composed/collection/CollectionCreateButton";
import { ButtonControlView } from "components/atomic/buttons/ButtonControl";
import EntityPurgeModal from "components/composed/entity/EntityPurgeModal";
import type { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";

export default function CommunityLayout({
  children,
  showSidebar = false,
  data,
  useRouteHeader = true,
}: {
  children: React.ReactNode;
  showSidebar?: boolean;
  data?: CommunityLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const community = useMaybeFragment(fragment, data);
  const { current: memoizedCommunity } = useLatestPresentValue(community);
  const activeRoute = RouteHelper.activeRoute();
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks(
    "community.manage",
    { slug },
    community,
  );
  const tabRoutes = useChildRouteLinks("community", { slug }, community);
  const router = useRouter();
  const destroy = useDestroyer();

  const handleDelete = useCallback(
    (hideDialog: () => void) => {
      if (community) {
        destroy.community(
          { communityId: community.id },
          community.name || "glossary.community",
        );
        hideDialog();
        router.back();
      }
    },
    [community, destroy, router],
  );

  const { globalAdmin } = useViewerContext();

  const deleteButton =
    globalAdmin && memoizedCommunity ? (
      <EntityPurgeModal
        id={memoizedCommunity.id}
        title={memoizedCommunity.name}
        entityType="item"
        handleDelete={handleDelete}
        redirectPath="/communities"
      />
    ) : (
      <ButtonControlConfirm
        modalLabel={t("messages.delete.confirm_label")}
        modalBody={t("messages.delete.confirm_body")}
        icon="delete"
        onClick={handleDelete}
        actions="communities.delete"
      >
        {t("common.delete")}
      </ButtonControlConfirm>
    );

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <CollectionCreateButton parentSlug={slug} />
      <ButtonControlView
        href={`${process.env.NEXT_PUBLIC_FE_URL}/communities/${slug}`}
      >
        {t("common.view")}
      </ButtonControlView>
      {deleteButton}
    </ButtonControlGroup>
  );

  return (
    <section>
      <PageHeader
        title={memoizedCommunity?.name}
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
  fragment CommunityLayoutFragment on Community {
    id
    name
    slug
    ...useChildRouteLinksFragment
  }
`;
