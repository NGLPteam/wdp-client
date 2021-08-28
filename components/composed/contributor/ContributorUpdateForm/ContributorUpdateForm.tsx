import React from "react";
import { graphql, useFragment } from "react-relay";
import ContributorUpdatePersonForm from "components/composed/contributor/ContributorUpdatePersonForm";
import ContributorUpdateOrganizationForm from "components/composed/contributor/ContributorUpdateOrganizationForm";
import type { ContributorUpdateFormFragment$key } from "@/relay/ContributorUpdateFormFragment.graphql";

export default function ContributorUpdateForm({ data }: Props) {
  const contributor = useFragment<ContributorUpdateFormFragment$key>(
    fragment,
    data
  );

  if (contributor.__typename === "PersonContributor")
    return <ContributorUpdatePersonForm data={contributor} />;
  if (contributor.__typename === "OrganizationContributor")
    return <ContributorUpdateOrganizationForm data={contributor} />;

  return null;
}

const fragment = graphql`
  fragment ContributorUpdateFormFragment on AnyContributor {
    __typename
    ... on PersonContributor {
      ...ContributorUpdatePersonFormFragment
    }
    ... on OrganizationContributor {
      ...ContributorUpdateOrganizationFormFragment
    }
  }
`;

interface Props {
  data: ContributorUpdateFormFragment$key;
}
