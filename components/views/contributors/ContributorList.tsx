import React, { useState } from "react";
import { graphql } from "react-relay";
import {
  ContributorListQuery,
  ContributorListQueryVariables,
} from "__generated__/ContributorListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader } from "components/layout";
import { Card, CardList } from "components/layout/CardList/CardList";
import Link from "next/link";
import { FullPageLoader } from "components/global";
import ContributorHeaders from "./ContributorHeadersPartial";

export default function ContributorList() {
  const [variables, setVariables] = useState<ContributorListQueryVariables>({
    order: "RECENT",
  });

  const {
    data,
    error,
    isLoading,
  } = useAuthenticatedQuery<ContributorListQuery>(query, variables);

  if (isLoading) {
    return null;
  }

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      <PageHeader title="Contributors" />
      <CardList>
        <ContributorHeaders variables={variables} setVariables={setVariables} />
        {data?.contributors?.nodes ? (
          data.contributors.nodes.map((contributor, index) => {
            if (contributor.__typename === "OrganizationContributor") {
              return (
                <Card key={index}>
                  <h4>
                    <Link href={`/contributors/${contributor.slug}`}>
                      {contributor.name}
                    </Link>
                  </h4>
                </Card>
              );
            } else if (contributor.__typename === "PersonContributor") {
              return (
                <Card key={index}>
                  <h4>
                    <Link href={`/contributors/${contributor.slug}`}>
                      {contributor.firstName} {contributor.lastName}
                    </Link>
                  </h4>
                </Card>
              );
            } else {
              return null;
            }
          })
        ) : data?.contributors === null ? (
          <div>No Contributors.</div>
        ) : (
          <FullPageLoader />
        )}
      </CardList>
    </section>
  );
}

// TODO: make breadcrumbs into a fragment to live within breadcrumbs
const query = graphql`
  query ContributorListQuery($order: SimpleOrder!) {
    contributors(order: $order) {
      nodes {
        __typename
        ... on OrganizationContributor {
          name: legalName
          slug
        }

        ... on PersonContributor {
          firstName: givenName
          lastName: familyName
          slug
        }
      }
    }
  }
`;
