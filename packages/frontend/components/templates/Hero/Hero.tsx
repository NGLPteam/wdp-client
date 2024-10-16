import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import BreadcrumbsBar from "@/components/layout/BreadcrumbsBar";
import SearchHero from "@/components/composed/search/SearchHero";
import EntityNavBar from "@/components/composed/entity/EntityNavBar";
import { HeroTemplateFragment$key } from "@/relay/HeroTemplateFragment.graphql";
import HeroHeader from "./Header";
import HeroDetail from "./Detail";
import HeroImage from "./Image";
import { mock } from "./mock";
// import * as Styled from "./Hero.styles";
import type { Slot } from "../templates.types";

export type HeroTemplateData = {
  config: {
    background: "none" | "light" | "dark";
    searchPrompt: string;
    bigSearch: boolean;
    heroImage: boolean;
    thumbnailImage: boolean;
    splitDisplay: boolean;
    contributors: boolean;
    navBar: boolean;
    descendantSearch: boolean;
    browse: boolean;
    share: boolean;
    breadcrumbs: boolean;
  };
  slots: {
    header: Slot | null;
    headerAside: Slot | null;
    headerSummary: Slot | null;
    headerSidebar: Slot | null;
    subheader: Slot | null;
    subheaderAside: Slot | null;
    sidebar: Slot | null;
    metadata: Slot | null;
    summary: Slot | null;
    cta: Slot | null;
  };
};

/*
  Questions
  - Idenity and metrics BE only? Included in sidebar liquid?
*/

export default function HeroTemplate({
  data,
}: {
  data: HeroTemplateFragment$key | null;
}) {
  const hero = useFragment(fragment, data);

  const {
    slots,
    config,
    heroImage = null,
  } = {
    ...hero,
    ...mock,
  };

  const { header, headerAside, headerSummary, headerSidebar, ...detailSlots } =
    slots ?? {};

  const headerData = {
    header,
    headerAside,
    headerSummary,
    headerSidebar,
  };

  const detailData = {
    ...detailSlots,
    contributors: config.contributors,
    thumbnailImage: config.thumbnailImage,
    data: hero,
  };

  const renderBreadcrumbs = !!(config.breadcrumbs || config.share);

  const heroImageLayout = undefined;

  // const Inner = heroImageLayout ? Styled.Inner : "div";

  return (
    <>
      {renderBreadcrumbs && (
        <BreadcrumbsBar data={hero} showShare={config.share} />
      )}
      <Container as="header" width="wide" bgColor={config.background}>
        <HeroHeader {...headerData} layout={heroImageLayout} />
      </Container>
      {config.bigSearch && <SearchHero prompt={config.searchPrompt} />}
      <Container bgColor={config.background}>
        {config.splitDisplay && <HeroDetail {...detailData} />}
      </Container>
      {config.heroImage && (
        <HeroImage data={heroImage} layout={heroImageLayout} />
      )}
      {config.navBar && (
        <EntityNavBar
          data={hero}
          showBrowse={config.browse}
          showSearch={config.descendantSearch}
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
