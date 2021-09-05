import React, { useMemo } from "react";

function ContributorDisplayName({ contributor }: Props) {
  const displayName = useMemo(() => getContributorDisplayName(contributor), [
    contributor,
  ]);
  return <span>{displayName}</span>;
}

export function getContributorDisplayName(contributor: AnyContributor): string {
  if (!contributor) return "";
  if (contributor.__typename === "OrganizationContributor")
    return organizationContributorName(contributor);
  if (contributor.__typename === "PersonContributor")
    return personContributorName(contributor);
  if (contributor.__typename === "%other")
    return otherContributorName(contributor);
  return "";
}

function personContributorName(contributor: PersonContributor): string {
  return `${contributor.firstName} ${contributor.lastName}`;
}

function organizationContributorName(
  contributor: OrganizationContributor
): string {
  return `${contributor.name}`;
}

function otherContributorName(contributorIgnored: OtherContributor): string {
  return "";
}

interface OtherContributor {
  __typename: "%other";
}

interface OrganizationContributor {
  __typename: "OrganizationContributor";
  name?: string | null;
}

interface PersonContributor {
  __typename: "PersonContributor";
  firstName?: string | null;
  lastName?: string | null;
}

type AnyContributor =
  | PersonContributor
  | OrganizationContributor
  | OtherContributor
  | null
  | undefined;

interface Props {
  contributor?: AnyContributor;
}

export default ContributorDisplayName;
