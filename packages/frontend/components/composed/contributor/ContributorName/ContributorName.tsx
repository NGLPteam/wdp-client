import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";

import {
  ContributorNameFragment,
  ContributorNameFragment$key,
} from "@/relay/ContributorNameFragment.graphql";

export default function ContributorName({ data }: Props) {
  const contributor = useMaybeFragment(fragment, data);

  return contributor ? <>{getContributorDisplayName(contributor)}</> : null;
}

interface Props {
  data?: ContributorNameFragment$key | null;
  label?: string;
}

const fragment = graphql`
  fragment ContributorNameFragment on AnyContributor {
    ... on PersonContributor {
      __typename
      familyName
      givenName
    }
    ... on OrganizationContributor {
      __typename
      legalName
    }
  }
`;

function getContributorDisplayName(
  contributor: ContributorNameFragment
): string {
  if (!contributor) return "";

  switch (contributor.__typename) {
    case "OrganizationContributor":
      return `${contributor.legalName}`;

    case "PersonContributor":
      return `${contributor.givenName} ${contributor.familyName}`;

    default:
      return "";
  }
}
