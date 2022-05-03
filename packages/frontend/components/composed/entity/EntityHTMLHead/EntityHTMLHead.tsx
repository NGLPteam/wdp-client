import React from "react";
import Head from "next/head";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { EntityHTMLHeadFragment$key } from "@/relay/EntityHTMLHeadFragment.graphql";
import { useGlobalContext } from "contexts";
import { EntityHTMLHeadGlobalFragment$key } from "@/relay/EntityHTMLHeadGlobalFragment.graphql";

export default function EntityHTMLHead({ data }: Props) {
  const globalData = useGlobalContext();

  const global = useMaybeFragment<EntityHTMLHeadGlobalFragment$key>(
    globalFragment,
    globalData?.globalConfiguration
  );

  const entity = useMaybeFragment(fragment, data);

  return entity ? (
    <Head>
      <title>
        {entity.title} - {global?.site?.installationName || "WDP"}
      </title>
    </Head>
  ) : null;
}

interface Props {
  data?: EntityHTMLHeadFragment$key | null;
}

const fragment = graphql`
  fragment EntityHTMLHeadFragment on AnyEntity {
    ... on Item {
      title
    }
    ... on Collection {
      title
    }
  }
`;

const globalFragment = graphql`
  fragment EntityHTMLHeadGlobalFragment on GlobalConfiguration {
    site {
      installationName
    }
  }
`;
