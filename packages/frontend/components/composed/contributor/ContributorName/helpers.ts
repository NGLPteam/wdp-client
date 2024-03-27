import { AnyContributor } from "types/graphql-schema";
import { ContributorNameFragment$data } from "@/relay/ContributorNameFragment.graphql";

export function getContributorDisplayName(
  contributor: Partial<AnyContributor> | ContributorNameFragment$data,
  reverse?: boolean,
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
