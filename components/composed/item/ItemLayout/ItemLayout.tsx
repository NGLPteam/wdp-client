import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import { ItemLayoutFragment$key } from "__generated__/ItemLayoutFragment.graphql";
import {
  useBreadcrumbs,
  useRouteSlug,
  useMaybeFragment,
  useChildRouteLinks,
} from "hooks";
import { ContentSidebar, PageHeader } from "components/layout";

export default function ItemLayout({
  children,
  showSidebar = false,
  data,
  subHead,
}: {
  children: ReactNode;
  showSidebar?: boolean;
  data?: ItemLayoutFragment$key | null;
  subHead?: boolean;
}) {
  const item = useMaybeFragment(fragment, data);
  const breadcrumbs = useBreadcrumbs(item || null);
  const slug = useRouteSlug() || undefined;
  const manageRoutes = useChildRouteLinks("item.manage", { slug });
  const tabRoutes = useChildRouteLinks("item", { slug });

  return (
    <section>
      <PageHeader
        title={item?.title}
        breadcrumbsProps={{ data: breadcrumbs }}
        tabRoutes={tabRoutes}
        subHead={subHead}
      />
      {showSidebar ? (
        <ContentSidebar sidebarLinks={manageRoutes}>{children}</ContentSidebar>
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
    ...useBreadcrumbsFragment
  }
`;
