import React, { ReactNode } from "react";
import { ContentSidebar, PageHeader } from "components/layout";
import { useChildRouteLinks, useMaybeFragment, useRouteSlug } from "hooks";
import { graphql } from "react-relay";
import { RouteHelper } from "routes";
import { useTranslation } from "react-i18next";
import { UserLayoutFragment$key } from "@/relay/UserLayoutFragment.graphql";

type Props = {
  children: ReactNode;
  showSidebar?: boolean;
  data?: UserLayoutFragment$key | null;
};

export default function UserLayout({
  children,
  showSidebar = false,
  data,
}: Props) {
  const user = useMaybeFragment(fragment, data);
  const slug = useRouteSlug() || undefined;
  const activeRoute = RouteHelper.activeRoute();
  const { t } = useTranslation();
  const manageRoutes = useChildRouteLinks("user", { slug });

  return (
    <section>
      <PageHeader title={user?.name} />
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
  fragment UserLayoutFragment on User {
    name
    email
  }
`;
