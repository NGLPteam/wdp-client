import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import EntityHero from "../EntityHero";
import { EntityLayoutFragment$key } from "@/relay/EntityLayoutFragment.graphql";

export default function EntityLayout({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return <EntityHero data={entity} />;
}

interface Props {
  data?: EntityLayoutFragment$key | null;
}

const fragment = graphql`
  fragment EntityLayoutFragment on Collection {
    ...EntityHeroFragment
  }
`;
