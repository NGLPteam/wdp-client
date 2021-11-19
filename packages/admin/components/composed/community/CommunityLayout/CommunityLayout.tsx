import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";
import { PageHeader, ContentSidebar, ContentHeader } from "components/layout";
import {
  useChildRouteLinks,
  useMaybeFragment,
  useRouteSlug,
  useLatestPresentValue,
} from "hooks";
import { RouteHelper } from "routes";
import { ButtonControlGroup } from "components/atomic";
import CollectionCreateButton from "components/composed/collection/CollectionCreateButton";

export default function CommunityLayout({
  children,
  showSidebar = false,
  data,
  useRouteHeader = true,
}: {
  children: ReactNode;
  showSidebar?: boolean;
  data?: CommunityLayoutFragment$key | null;
  useRouteHeader?: boolean;
}) {
  const community = useMaybeFragment(fragment, data);
  const { current: memoizedCommunity } = useLatestPresentValue(community);
  const activeRoute = RouteHelper.activeRoute();
  const { t } = useTranslation();
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("community.manage", { slug });
  const tabRoutes = useChildRouteLinks("community", { slug });

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <CollectionCreateButton parentSlug={slug} />
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
    name
    slug
  }
`;
