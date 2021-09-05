import React, { ReactNode } from "react";
import { graphql } from "react-relay";
import type { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";
import { PageHeader } from "components/layout";
import { useBreadcrumbs, useMaybeFragment } from "hooks";

export default function CommunityLayout({
  children,
  data,
}: {
  children: ReactNode;
  data?: CommunityLayoutFragment$key | null;
}) {
  const community = useMaybeFragment(fragment, data);
  const breadcrumbs = useBreadcrumbs(community || null);

  const tabRoutes = [
    {
      label: "Child Collections",
      route: `community.child.collections`,
    },
    {
      label: "Manage",
      route: `community.manage`,
    },
  ];

  return (
    <section>
      <PageHeader
        title={community?.name}
        breadcrumbsProps={{ data: breadcrumbs }}
        tabRoutes={tabRoutes}
      />
      {children}
    </section>
  );
}

const fragment = graphql`
  fragment CommunityLayoutFragment on Community {
    name
    slug
    ...useBreadcrumbsFragment
  }
`;
