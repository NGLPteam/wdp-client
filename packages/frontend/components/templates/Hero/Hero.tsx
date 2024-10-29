"use client";

import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import BreadcrumbsBar from "@/components/layout/BreadcrumbsBar";
import SearchHero from "@/components/composed/search/SearchHero";
import EntityNavBar from "@/components/composed/entity/EntityNavBar";
import { HeroTemplateFragment$key } from "@/relay/HeroTemplateFragment.graphql";
import { HeroTemplateLayoutFragment$key } from "@/relay/HeroTemplateLayoutFragment.graphql";
import HeroHeader from "./Header";
import HeroDetail from "./Detail";
import HeroImage from "./Image";

export default function HeroTemplate({
  data,
  layoutData,
}: {
  data: HeroTemplateFragment$key | null;
  layoutData?: HeroTemplateLayoutFragment$key | null;
}) {
  const hero = useFragment(fragment, data);
  const layout = useFragment(layoutFragment, layoutData);

  const { slots, definition } = layout?.template ?? {};

  const {
    background,
    descendantSearchPrompt: searchPrompt,
    enableDescendantBrowsing,
    enableDescendantSearch,
    showBreadcrumbs,
    showHeroImage,
    showSharingLink,
    showSplitDisplay,
    showBigSearchPrompt,
  } = definition ?? {};

  const renderBreadcrumbs = !!(showBreadcrumbs || showSharingLink);

  const heroImageLayout = undefined;

  // const Inner = heroImageLayout ? Styled.Inner : "div";

  return (
    <>
      {renderBreadcrumbs && (
        <BreadcrumbsBar data={hero} showShare={showSharingLink ?? false} />
      )}
      <Container as="header" width="wide" bgColor={background}>
        <HeroHeader data={slots} layout={heroImageLayout} />
      </Container>
      {showBigSearchPrompt && <SearchHero prompt={searchPrompt} />}
      <Container bgColor={background}>
        {showSplitDisplay && (
          <HeroDetail data={hero} layoutData={layout?.template} />
        )}
      </Container>
      {showHeroImage && hero?.heroImage && (
        <HeroImage data={hero?.heroImage} layout={heroImageLayout} />
      )}
      {(enableDescendantBrowsing || enableDescendantSearch) && (
        <EntityNavBar
          data={hero}
          showBrowse={enableDescendantBrowsing}
          showSearch={enableDescendantSearch}
        />
      )}
    </>
  );
}

const fragment = graphql`
  fragment HeroTemplateFragment on AnyEntity {
    ...BreadcrumbsBarFragment
    ...EntityNavBarFragment
    ...DetailHeroFragment
    ... on Community {
      heroImage {
        ...ImageHeroTemplateFragment
      }
      heroImageLayout
    }
    ... on Collection {
      heroImage {
        ...ImageHeroTemplateFragment
      }
    }
  }
`;

const layoutFragment = graphql`
  fragment HeroTemplateLayoutFragment on HeroLayoutInstance {
    lastRenderedAt
    template {
      layoutKind
      templateKind
      lastRenderedAt
      definition {
        background
        descendantSearchPrompt
        enableDescendantBrowsing
        enableDescendantSearch
        showBreadcrumbs
        showDOI
        showISSN
        showHeroImage
        showSharingLink
        showSplitDisplay
        showThumbnailImage
        showBigSearchPrompt
        listContributors
        showBasicViewMetrics
      }
      slots {
        ...HeaderHeroFragment
      }
      ...DetailHeroLayoutFragment
    }
  }
`;
