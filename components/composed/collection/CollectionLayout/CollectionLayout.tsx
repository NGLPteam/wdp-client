import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import type { CollectionLayoutFragment$key } from "@/relay/CollectionLayoutFragment.graphql";
import { PageHeader } from "components/layout";
import { useBreadcrumbs, useMaybeFragment } from "hooks";

export default function CollectionLayout({
  children,
  data,
}: {
  children: ReactNode;
  data?: CollectionLayoutFragment$key | null;
}) {
  const collection = useMaybeFragment(fragment, data);
  const breadcrumbs = useBreadcrumbs(collection || null);

  const tabRoutes = [
    {
      label: "Child Collections",
      route: `collection.child.collections`,
    },
    {
      label: "Child Items",
      route: `collection.child.items`,
    },
    {
      label: "Manage",
      route: `collection.manage`,
    },
  ];

  return (
    <section>
      <PageHeader
        title={collection?.title}
        breadcrumbsProps={{ data: breadcrumbs }}
        tabRoutes={tabRoutes}
      />
      {children}
    </section>
  );
}

const fragment = graphql`
  fragment CollectionLayoutFragment on Collection {
    title
    slug
    ...useBreadcrumbsFragment
  }
`;
