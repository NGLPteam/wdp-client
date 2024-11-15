"use client";

import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import BreadcrumbsBar from "@/components/layout/BreadcrumbsBar";
import SearchHero from "@/components/composed/search/SearchHero";
import EntityNavBar from "@/components/composed/entity/EntityNavBar";
import { HeroTemplateFragment$key } from "@/relay/HeroTemplateFragment.graphql";
import HeroHeader from "./Header";
import HeroDetail from "./Detail";
import HeroImage from "./Image";
import * as Styled from "./Hero.styles";

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
    showHeroImage,
    showSharingLink,
    showSplitDisplay,
    showBigSearchPrompt,
  } = template?.definition ?? {};

  const renderBreadcrumbs = !!(showBreadcrumbs || showSharingLink);

  const { heroImageLayout } = entity ?? {};

  const Inner = heroImageLayout ? Styled.Inner : "div";

  const CommunityHeroHeader = (
    <section
      className={
        heroImageLayout === "ONE_COLUMN" ? "a-bg-neutral90" : undefined
      }
    >
      <Inner>
        <HeroHeader data={layout?.template} layout={heroImageLayout} />
        {showHeroImage && entity?.heroImage && (
          <HeroImage data={entity?.heroImage} layout={heroImageLayout} />
        )}
      </Inner>
    </section>
  );

  const BaseHeroHeader = (
    <>
      <Container as="header" width="wide" bgColor={background}>
        <HeroHeader data={layout?.template} layout={heroImageLayout} />
      </Container>
      {showHeroImage && entity?.heroImage && (
        <HeroImage data={entity?.heroImage} layout={heroImageLayout} />
      )}
    </>
  );

  return (
    <>
      {renderBreadcrumbs && (
        <BreadcrumbsBar data={entity} showShare={showSharingLink ?? false} />
      )}
      {entity?.__typename === "Community"
        ? CommunityHeroHeader
        : BaseHeroHeader}
      {showBigSearchPrompt && <SearchHero prompt={searchPrompt} />}
      <Container bgColor={background}>
        {showSplitDisplay && <HeroDetail data={layout?.template} />}
      </Container>
      {(enableDescendantBrowsing || enableDescendantSearch) && (
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
        heroImage {
          ...ImageHeroTemplateFragment
        }
        heroImageLayout
      }
      ... on Collection {
        __typename
        heroImage {
          ...ImageHeroTemplateFragment
        }
      }
      ... on Item {
        __typename
        heroImage {
          ...ImageHeroTemplateFragment
        }
      }
    }
    template {
      definition {
        background
        descendantSearchPrompt
        enableDescendantBrowsing
        enableDescendantSearch
        showBreadcrumbs
        showHeroImage
        showSharingLink
        showSplitDisplay
        showBigSearchPrompt
      }
      ...HeaderHeroFragment
      ...DetailHeroFragment
    }
  }
`;
