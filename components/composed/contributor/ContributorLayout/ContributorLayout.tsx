import React, { ReactNode, useMemo } from "react";
import { graphql } from "react-relay";
import { ContributorLayoutQuery } from "__generated__/ContributorLayoutQuery.graphql";
import { useRouter } from "next/router";
import { useAuthenticatedQuery } from "hooks";
import { RouteHelper, routeQueryArrayToString } from "routes";
import { PageHeader, ContentSidebar } from "components/layout";

export default function ContributorLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const { slug } = router.query;

  const { data } = useAuthenticatedQuery<ContributorLayoutQuery>(query, {
    slug: routeQueryArrayToString(slug),
  });

  // Get the contributor's child routes with current query
  const childRoutes = useMemo(() => {
    const mainRoute = RouteHelper.findRouteByName("contributor");

    return mainRoute?.routes
      ? mainRoute.routes.map((route) => ({ ...route, query: { slug } }))
      : undefined;
  }, [slug]);

  // Get the contributor's display name
  const displayName = useMemo(
    () =>
      data?.contributor?.__typename === "PersonContributor"
        ? `${data?.contributor?.firstName} ${data?.contributor?.lastName}`
        : data?.contributor?.__typename === "OrganizationContributor"
        ? data?.contributor?.name
        : "",
    [data]
  );

  return (
    <section>
      {data && data.contributor && <PageHeader title={displayName} />}
      <ContentSidebar sidebarLinks={childRoutes}>{children}</ContentSidebar>
    </section>
  );
}

const query = graphql`
  query ContributorLayoutQuery($slug: Slug!) {
    contributor(slug: $slug) {
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
  }
`;
