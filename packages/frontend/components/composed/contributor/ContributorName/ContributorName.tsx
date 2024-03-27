import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ContributorNameFragment$key } from "@/relay/ContributorNameFragment.graphql";
import { getContributorDisplayName } from "./helpers";

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
