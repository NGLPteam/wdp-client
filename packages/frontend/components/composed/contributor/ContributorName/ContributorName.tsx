import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AnyContributor } from "types/graphql-schema";
import {
  ContributorNameFragment$data,
  ContributorNameFragment$key,
} from "@/relay/ContributorNameFragment.graphql";

export default function ContributorName({ data }: Props) {
  const contributor = useMaybeFragment(fragment, data);

  return contributor ? (
    <span
      dangerouslySetInnerHTML={{
        __html: getContributorDisplayName(contributor),
      }}
    />
  ) : null;
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

export function getContributorDisplayName(
  contributor: Partial<AnyContributor> | ContributorNameFragment$data,
  reverse?: boolean
): string {
  if (!contributor) return "";

  switch (contributor.__typename) {
    case "OrganizationContributor":
      return `${contributor.legalName}`;

    case "PersonContributor":
      return reverse
        ? `${contributor.familyName}, ${contributor.givenName}`
        : `${contributor.givenName} ${contributor.familyName}`;

    default:
      return "";
  }
}
