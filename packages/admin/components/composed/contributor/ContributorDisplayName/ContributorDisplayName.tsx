import React, { useMemo } from "react";

function ContributorDisplayName({ contributor }: Props) {
  const displayName = useMemo(
    () => getContributorDisplayName(contributor),
    [contributor]
  );
  return <span>{displayName}</span>;
}

export function getContributorDisplayName(contributor: AnyContributor): string {
  if (!contributor) return "";
  if (
    contributor.__typename !== "OrganizationContributor" &&
    contributor.__typename !== "PersonContributor"
  )
    return otherContributorName(contributor);
  if (contributor.__typename === "OrganizationContributor")
    return organizationContributorName(contributor);
  if (contributor.__typename === "PersonContributor")
    return personContributorName(contributor);

  return "";
}

function personContributorName(contributor: PersonContributor): string {
  return `${contributor.givenName} ${contributor.familyName}`;
}

function organizationContributorName(
  contributor: OrganizationContributor
): string {
  return `${contributor.legalName}`;
}

function otherContributorName(contributorIgnored: OtherContributor): string {
  return "";
}

interface OtherContributor {
  __typename: string;
}

interface OrganizationContributor {
  __typename: string;
  legalName?: string | null;
}

interface PersonContributor {
  __typename: string;
  givenName?: string | null;
  familyName?: string | null;
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
