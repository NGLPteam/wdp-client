import React, { ReactNode, useMemo } from "react";
import { graphql } from "react-relay";
import { ContributorLayoutQuery } from "__generated__/ContributorLayoutQuery.graphql";
import { useRouter } from "next/router";
import { useAuthenticatedQuery } from "hooks";
import { routeQueryArrayToString } from "routes";
import { PageHeader } from "components/layout";

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

      {children}
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
