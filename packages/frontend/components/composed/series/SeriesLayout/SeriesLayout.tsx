import { graphql, readInlineData } from "relay-runtime";
import BreadcrumbsBar from "components/layout/BreadcrumbsBar";
import EntityNavBar from "components/composed/entity/EntityNavBar";
import { SeriesLayoutFragment$key } from "@/relay/SeriesLayoutFragment.graphql";
import SeriesHero from "../SeriesHero";

export default function SeriesLayout({ data, children }: Props) {
  const volume = readInlineData(fragment, data);

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
  data: SeriesLayoutFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment SeriesLayoutFragment on Collection @inline {
    ...BreadcrumbsBarFragment
    ...SeriesHeroFragment
    ...EntityNavBarFragment
  }
`;
