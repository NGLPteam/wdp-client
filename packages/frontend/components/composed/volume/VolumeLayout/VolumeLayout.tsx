import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import VolumeHero from "../VolumeHero";
import { BreadcrumbsBar } from "components/layout";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";
import { VolumeLayoutFragment$key } from "@/relay/VolumeLayoutFragment.graphql";
import EntityNavBar from "components/composed/entity/EntityNavBar";

export default function VolumeLayout({ data, children }: Props) {
  const volume = useMaybeFragment(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={volume} />
      <VolumeHero data={volume} />
      <EntityNavBar data={volume} />
      {children}
    </>
  );
}

interface Props {
  data?: VolumeLayoutFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment VolumeLayoutFragment on Collection {
    ...BreadcrumbsBarFragment
    ...VolumeHeroFragment
    ...EntityNavBarFragment
  }
`;
