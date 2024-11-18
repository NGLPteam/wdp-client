"use client";

import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import BreadcrumbsBar from "@/components/layout/BreadcrumbsBar";
import SearchHero from "@/components/composed/search/SearchHero";
import { HeroTemplateFragment$key } from "@/relay/HeroTemplateFragment.graphql";
import HeroDetail from "./Detail";
import CommunityHeroHeader from "./patterns/Community";
import EntityHeroHeader from "./patterns/Entity";

export default function HeroTemplate({
  data,
}: {
  data: HeroTemplateFragment$key | null;
}) {
  const layout = useFragment(fragment, data);

  const { template, entity } = layout ?? {};

  const {
    background,
    descendantSearchPrompt: searchPrompt,
    showBreadcrumbs,
    showSharingLink,
    showSplitDisplay,
    showBigSearchPrompt,
  } = template?.definition ?? {};

  const renderBreadcrumbs = !!(showBreadcrumbs || showSharingLink);

  const isCommunity = entity?.__typename === "Community";

  return (
    <>
      {renderBreadcrumbs && (
        <BreadcrumbsBar data={entity} showShare={showSharingLink ?? false} />
      )}
      {isCommunity ? (
        <CommunityHeroHeader data={layout} />
      ) : (
        <EntityHeroHeader data={layout} />
      )}
      {showBigSearchPrompt && <SearchHero prompt={searchPrompt} />}
      <Container bgColor={background}>
        {showSplitDisplay && <HeroDetail data={layout?.template} />}
      </Container>
    </>
  );
}

const fragment = graphql`
  fragment HeroTemplateFragment on HeroLayoutInstance {
    entity {
      ... on Community {
        __typename
      }
      ...BreadcrumbsBarFragment
    }
    template {
      definition {
        background
        descendantSearchPrompt
        showBreadcrumbs
        showSharingLink
        showSplitDisplay
        showBigSearchPrompt
      }
      ...DetailHeroFragment
    }
    ...CommunityHeroHeaderFragment
    ...EntityHeroHeaderFragment
  }
`;
