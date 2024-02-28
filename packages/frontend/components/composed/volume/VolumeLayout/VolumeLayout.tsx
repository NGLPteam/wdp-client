import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { BreadcrumbsBar } from "components/layout";
import EntityNavBar from "components/composed/entity/EntityNavBar";
import { VolumeLayoutFragment$key } from "@/relay/VolumeLayoutFragment.graphql";
import VolumeHero from "../VolumeHero";

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
