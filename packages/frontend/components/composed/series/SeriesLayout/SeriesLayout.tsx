import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { BreadcrumbsBar } from "components/layout";
import EntityNavBar from "components/composed/entity/EntityNavBar";
import { SeriesLayoutFragment$key } from "@/relay/SeriesLayoutFragment.graphql";
import SeriesHero from "../SeriesHero";

export default function SeriesLayout({ data, children }: Props) {
  const volume = useMaybeFragment(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={volume} />
      <SeriesHero data={volume} />
      <EntityNavBar data={volume} />
      {children}
    </>
  );
}

interface Props {
  data?: SeriesLayoutFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment SeriesLayoutFragment on Collection {
    ...BreadcrumbsBarFragment
    ...SeriesHeroFragment
    ...EntityNavBarFragment
  }
`;
