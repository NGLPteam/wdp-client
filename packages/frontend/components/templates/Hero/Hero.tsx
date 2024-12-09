"use client";

import { graphql, useFragment } from "react-relay";
import { HeroTemplateFragment$key } from "@/relay/HeroTemplateFragment.graphql";
import CommunityHeroHeader from "./patterns/Community";
import EntityHeroHeader from "./patterns/Entity";

export default function HeroTemplate({
  data,
}: {
  data: HeroTemplateFragment$key | null;
}) {
  const layout = useFragment(fragment, data);

  const { entity } = layout ?? {};

  const isCommunity = entity?.__typename === "Community";

  return isCommunity ? (
    <CommunityHeroHeader data={layout} />
  ) : (
    <EntityHeroHeader data={layout} />
  );
}

const fragment = graphql`
  fragment HeroTemplateFragment on HeroLayoutInstance {
    entity {
      ... on Community {
        __typename
      }
    }
    ...CommunityHeroHeaderFragment
    ...EntityHeroHeaderFragment
  }
`;
