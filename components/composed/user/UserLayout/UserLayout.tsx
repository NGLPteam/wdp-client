import React, { ReactNode } from "react";
import { ContentSidebar, PageHeader } from "components/layout";
import { useChildRouteLinks, useMaybeFragment, useRouteSlug } from "hooks";
import { graphql } from "react-relay";
import { UserLayoutFragment$key } from "@/relay/UserLayoutFragment.graphql";

type Props = {
  children: ReactNode;
  showSidebar?: boolean;
  data?: UserLayoutFragment$key;
};

export default function UserLayout({
  children,
  showSidebar = false,
  data,
}: Props) {
  const user = useMaybeFragment(fragment, data);
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("user.manage", { slug });
  return (
    <section>
      <PageHeader title={user?.name} />
      {showSidebar ? (
        <ContentSidebar sidebarLinks={manageRoutes}>{children}</ContentSidebar>
      ) : (
        children
      )}
    </section>
  );
}

const fragment = graphql`
  fragment UserLayoutFragment on User {
    name
  }
`;
