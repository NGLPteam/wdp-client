import React, { useEffect, useState } from "react";
import { useRouterContext } from "hooks/useRouterContext";
import { ModelHeader } from "components/composed/model";
import { Manage } from "../entities";
import ContributorContributions from "./ContributorContributions";
import { graphql } from "react-relay";
import {
  ContributorDetailQuery,
  ContributorDetailQueryVariables,
} from "@/relay/ContributorDetailQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";

export default function ContributorDetail() {
  const { activeId: id, activeView: view } = useRouterContext();

  const [variables, setVariables] = useState<ContributorDetailQueryVariables>({
    slug: id,
  });

  const {
    data,
    error,
    isLoading,
  } = useAuthenticatedQuery<ContributorDetailQuery>(query, variables);

  useEffect(() => {
    setVariables((v) => ({ ...v, slug: id }));
  }, [id, setVariables]);

  if (isLoading) {
    return null;
  }

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      {data?.contributor && (
        <ModelHeader
          id={id}
          title={`${
            data?.contributor?.name ||
            `${data?.contributor?.firstName} ${data?.contributor?.lastName}`
          }`}
          model="contributor"
        />
      )}

      {view === "main" && <div>Main</div>}
      {view === "contributions" && <ContributorContributions />}
      {view === "manage" && <Manage />}
    </section>
  );
}

const query = graphql`
  query ContributorDetailQuery($slug: Slug!) {
    contributor(slug: $slug) {
      __typename
      ... on OrganizationContributor {
        name: legalName
        createdAt
        updatedAt
      }
      ... on PersonContributor {
        firstName: givenName
        lastName: familyName
        createdAt
        updatedAt
      }
      ... on Sluggable {
        slug
      }
    }
  }
`;
