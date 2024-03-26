import { readInlineData, graphql } from "relay-runtime";
import BreadcrumbsBar from "components/layout/BreadcrumbsBar";
import EntityNavBar from "components/composed/entity/EntityNavBar";
import { EntityLayoutFragment$key } from "@/relay/EntityLayoutFragment.graphql";
import EntityHero from "../EntityHero";

export default function EntityLayout({ data, children }: Props) {
  const entity = readInlineData(fragment, data);

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
  data: EntityLayoutFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityLayoutFragment on AnyEntity @inline {
    ... on Entity {
      ...BreadcrumbsBarFragment
      ...EntityHeroFragment
      ...EntityNavBarFragment
    }
  }
`;
