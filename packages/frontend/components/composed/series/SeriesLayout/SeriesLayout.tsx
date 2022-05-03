import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import SeriesHero from "../SeriesHero";
import { BreadcrumbsBar } from "components/layout";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";
import { SeriesLayoutFragment$key } from "@/relay/SeriesLayoutFragment.graphql";
import EntityNavBar from "components/composed/entity/EntityNavBar";

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
