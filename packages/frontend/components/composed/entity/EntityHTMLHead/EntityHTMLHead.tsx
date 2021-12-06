import React from "react";
import Head from "next/head";

import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { EntityHTMLHeadFragment$key } from "@/relay/EntityHTMLHeadFragment.graphql";

export default function EntityHTMLHead({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return entity ? (
    <Head>
      <title>{entity.title} - WDP</title>
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
