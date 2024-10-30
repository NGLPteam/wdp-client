import { graphql, useFragment } from "react-relay";
import type { HeroImageLayout } from "@/types/graphql-schema";
import { HeaderHeroFragment$key } from "@/relay/HeaderHeroFragment.graphql";
import { HeaderSidebarHeroFragment$key } from "@/relay/HeaderSidebarHeroFragment.graphql";
import TitleBlock from "./HeaderTitleBlock";
import Sidebar from "./HeaderSidebar";
import * as Styled from "./Header.styles";

export default function HeroHeader({
  data,
  entityData,
  layout,
}: {
  data?: HeaderHeroFragment$key | null;
  entityData?: HeaderSidebarHeroFragment$key | null;
  layout?: HeroImageLayout;
}) {
  const template = useFragment(fragment, data);

  const { slots } = template ?? {};

  const Wrapper = layout ? Styled.Columns : Styled.Inner;

  return slots || entityData ? (
    <Wrapper $layout={layout}>
      <TitleBlock layout={layout} data={slots} />
      <Sidebar data={template} entityData={entityData} />
    </Wrapper>
  ) : null;
}

const fragment = graphql`
  fragment HeaderHeroFragment on HeroTemplateInstance {
    ...HeaderSidebarHeroLayoutFragment
    slots {
      ...HeaderTitleBlockFragment
    }
  }
`;
