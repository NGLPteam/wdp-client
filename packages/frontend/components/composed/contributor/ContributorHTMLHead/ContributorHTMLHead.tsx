import React from "react";
import { graphql } from "react-relay";
import Head from "next/head";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useGlobalStaticContext } from "contexts/GlobalStaticContext";
import { ContributorHTMLHeadFragment$key } from "@/relay/ContributorHTMLHeadFragment.graphql";

export default function ContributorHTMLHead({ data }: Props) {
  const staticData = useGlobalStaticContext();
  const installationName =
    staticData?.globalConfiguration?.site?.installationName || "WDP";

  const contributor = useMaybeFragment(fragment, data);

  return contributor ? (
    <Head>
      <title>
        {contributor.__typename === "OrganizationContributor"
          ? `${contributor.legalName} `
          : contributor.__typename === "PersonContributor"
            ? `${contributor.givenName} ${contributor.familyName} `
            : ""}
        - {installationName}
      </title>
    </Head>
  ) : null;
}

interface Props {
  data?: ContributorHTMLHeadFragment$key | null;
}

const fragment = graphql`
  fragment ContributorHTMLHeadFragment on Contributor {
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
