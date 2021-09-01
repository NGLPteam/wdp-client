import React, { ReactNode, useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import { useRouter } from "next/router";
import { RouteHelper } from "routes";
import { PageHeader, ContentSidebar } from "components/layout";
import { useTranslation } from "react-i18next";
import capitalize from "lodash/capitalize";

import { ContributorLayoutFragment$key } from "@/relay/ContributorLayoutFragment.graphql";

export default function ContributorLayout({
  children,
  data,
}: {
  children: ReactNode;
  data: ContributorLayoutFragment$key;
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const { slug } = router.query;
  const mainRoute = RouteHelper.findRouteByName("contributor");
  const contributor = useFragment(fragment, data);

  // Get the contributor's child routes with current query
  const childRoutes = useMemo(() => {
    return mainRoute?.routes
      ? mainRoute.routes.map((route) => ({ ...route, query: { slug } }))
      : undefined;
  }, [slug, mainRoute]);

  // Get the contributor's display name
  const displayName = useMemo(() => {
    if (!contributor) return "";
    return contributor.__typename === "PersonContributor"
      ? `${contributor.firstName} ${contributor.lastName}`
      : contributor.__typename === "OrganizationContributor"
      ? contributor.name
      : "";
  }, [contributor]);

  // Build breadcrumbs
  const breadcrumbs = useMemo(() => {
    const parentRoute = RouteHelper.findRouteByName("contributors");
    return parentRoute && mainRoute
      ? {
          data: [
            {
              href: { pathname: parentRoute.path },
              label: capitalize(t("glossary.contributor", { count: 2 })),
            },
            {
              href: { pathname: mainRoute.path, query: { slug } },
              label: displayName,
            },
          ],
        }
      : undefined;
  }, [mainRoute, t, slug, displayName]);

  return (
    <section>
      {contributor && (
        <PageHeader breadcrumbsProps={breadcrumbs} title={displayName} />
      )}
      <ContentSidebar sidebarLinks={childRoutes}>{children}</ContentSidebar>
    </section>
  );
}

const fragment = graphql`
  fragment ContributorLayoutFragment on AnyContributor {
    __typename
    ... on OrganizationContributor {
      slug
      name: legalName
    }
    ... on PersonContributor {
      firstName: givenName
      lastName: familyName
    }
  }
`;
