import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import { ItemLayoutFragment$key } from "__generated__/ItemLayoutFragment.graphql";
import { useBreadcrumbs, useMaybeFragment } from "hooks";

import { PageHeader } from "components/layout";

export default function ItemLayout({
  children,
  data,
}: {
  children: ReactNode;
  data?: ItemLayoutFragment$key | null;
}) {
  const item = useMaybeFragment(fragment, data);
  const breadcrumbs = useBreadcrumbs(item || null);

  const tabRoutes = [
    {
      label: "Child Items",
      route: `item.child.items`,
    },
    {
      label: "Manage",
      route: `item.manage`,
    },
  ];

  return (
    <section>
      <PageHeader
        title={item?.title}
        breadcrumbsProps={{ data: breadcrumbs }}
        tabRoutes={tabRoutes}
      />

      {children}
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
