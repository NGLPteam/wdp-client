import React, { ReactNode } from "react";
import { ContentSidebar, PageHeader } from "components/layout";
import { useChildRouteLinks, useMaybeFragment, useRouteSlug } from "hooks";
import { graphql } from "react-relay";
import { UserLayoutFragment$key } from "@/relay/UserLayoutFragment.graphql";

type Props = {
  children: ReactNode;
  showSidebar?: boolean;
  data?: UserLayoutFragment$key | null;
  subHead?: boolean;
};

export default function UserLayout({
  children,
  showSidebar = false,
  data,
  subHead,
}: Props) {
  const user = useMaybeFragment(fragment, data);
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("user", { slug });
  return (
    <section>
      <PageHeader title={user?.name} subHead={subHead} />
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
    email
  }
`;
