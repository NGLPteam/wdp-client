"use client";

import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import BreadcrumbsBar from "@/components/layout/BreadcrumbsBar";
import SearchHero from "@/components/composed/search/SearchHero";
import EntityNavBar from "@/components/composed/entity/EntityNavBar";
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
    enableDescendantBrowsing,
    enableDescendantSearch,
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
      {(enableDescendantBrowsing || enableDescendantSearch) && !isCommunity && (
        <EntityNavBar
          data={entity}
          showBrowse={enableDescendantBrowsing}
          showSearch={enableDescendantSearch}
        />
      )}
    </>
  );
}

const fragment = graphql`
  fragment HeroTemplateFragment on HeroLayoutInstance {
    entity {
      ...BreadcrumbsBarFragment
      ...EntityNavBarFragment
      ... on Community {
        __typename
      }
    }
    template {
      definition {
        background
        descendantSearchPrompt
        enableDescendantBrowsing
        enableDescendantSearch
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
