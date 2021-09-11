import React, { ReactNode, useMemo } from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { RouteHelper } from "routes";
import { useTranslation } from "react-i18next";
import capitalize from "lodash/capitalize";
import { useMaybeFragment } from "hooks";
import type { ContributorLayoutFragment$key } from "@/relay/ContributorLayoutFragment.graphql";

import { PageHeader, ContentSidebar } from "components/layout";
import ContributorDisplayName, {
  getContributorDisplayName,
} from "../ContributorDisplayName";

export default function ContributorLayout({
  children,
  data,
}: {
  children: ReactNode;
  data?: ContributorLayoutFragment$key | null;
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const { slug } = router.query;
  const mainRoute = RouteHelper.findRouteByName("contributor");
  const contributor = useMaybeFragment(fragment, data);

  // Get the contributor's child routes with current query
  const childRoutes = useMemo(() => {
    return mainRoute?.routes
      ? mainRoute.routes.map((route) => ({ ...route, query: { slug } }))
      : undefined;
  }, [slug, mainRoute]);

  // Build breadcrumbs
  const breadcrumbs = useMemo(() => {
    const parentRoute = RouteHelper.findRouteByName("contributors");
    return parentRoute && mainRoute
      ? {
          data: [
            {
              href: { pathname: parentRoute.path },
              label: capitalize(t("glossary.contributor.label", { count: 2 })),
            },
            {
              href: { pathname: mainRoute.path, query: { slug } },
              label: getContributorDisplayName(contributor),
            },
          ],
        }
      : undefined;
  }, [contributor, mainRoute, t, slug]);

  return (
    <section>
      <PageHeader
        breadcrumbsProps={breadcrumbs}
        title={<ContributorDisplayName contributor={contributor} />}
      />
      <ContentSidebar sidebarLinks={childRoutes}>{children}</ContentSidebar>
    </section>
  );
}

const fragment = graphql`
  fragment ContributorLayoutFragment on AnyContributor {
    __typename
    ... on OrganizationContributor {
      slug
      legalName
    }
    ... on PersonContributor {
      givenName
      familyName
    }
  }
`;
