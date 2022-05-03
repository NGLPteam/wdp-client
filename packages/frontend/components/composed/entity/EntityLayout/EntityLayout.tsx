import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import EntityHero from "../EntityHero";
import EntityHTMLHead from "../EntityHTMLHead";
import { EntityLayoutFragment$key } from "@/relay/EntityLayoutFragment.graphql";
import { BreadcrumbsBar } from "components/layout";
import EntityNavBar from "components/composed/entity/EntityNavBar";

export default function EntityLayout({ data, children }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={entity} />
      <EntityHero data={entity} />
      <EntityNavBar data={entity} />
      {children}
    </>
  );
}

interface Props {
  data?: EntityLayoutFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityLayoutFragment on AnyEntity {
    ... on Entity {
      ...BreadcrumbsBarFragment
      ...EntityHeroFragment
      ...EntityNavBarFragment
    }
  }
`;
