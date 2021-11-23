import React from "react";
import { graphql } from "react-relay";
import Head from "next/head";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { CommunityHTMLHeadFragment$key } from "@/relay/CommunityHTMLHeadFragment.graphql";

export default function CommunityHTMLHead({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  return community ? (
    <Head>
      <title>{community.title} - WDP</title>
    </Head>
  ) : null;
}

interface Props {
  data?: CommunityHTMLHeadFragment$key | null;
}

const fragment = graphql`
  fragment CommunityHTMLHeadFragment on Community {
    title
  }
`;
