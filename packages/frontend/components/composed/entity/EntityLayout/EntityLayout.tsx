import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import EntityHero from "../EntityHero";
import EntityHTMLHead from "../EntityHTMLHead";
import { EntityLayoutFragment$key } from "@/relay/EntityLayoutFragment.graphql";
import { BreadcrumbsBar } from "components/layout";

export default function EntityLayout({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return (
    <>
      <EntityHTMLHead data={entity} />
      <BreadcrumbsBar data={entity} />
      <EntityHero data={entity} />
    </>
  );
}

interface Props {
  data?: EntityLayoutFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityLayoutFragment on AnyEntity {
    ...EntityHTMLHeadFragment
    ... on Collection {
      ...BreadcrumbsBarFragment
      ...EntityHeroFragment
    }
    ... on Item {
      ...BreadcrumbsBarFragment
      ...EntityHeroFragment
    }
  }
`;
