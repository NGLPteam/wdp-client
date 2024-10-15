import HeroHeader from "./Header";
import HeroDetail from "./Detail";
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
    header: Slot;
    headerAside: Slot;
    headerSummary: Slot;
    headerSidebar: Slot;
    subheader: Slot;
    subheaderAside: Slot;
    sidebar: Slot;
    metadata: Slot;
    summary: Slot;
    cta: Slot;
  };
};

/*
  Questions
  - Idenity and metrics BE only? Included in sidebar liquid?
*/

/*
  Needs other fragment data:
  - heroImage
  - thumbnailImage
  - navBar
  - breadcrumbs
  - search
*/

export default function HeroTemplate(data: HeroTemplateData) {
  const { slots, config } = data;

  const {
    header,
    headerAside,
    headerSummary,
    headerSidebar,
    ...detailSlots
  } = slots;

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
  };

  const renderBreadcrumbs = !!(config.breadcrumbs || config.share);

  return (
    <Container bg={config.background}>
      {renderBreadcrumbs && <Breadcrumbs />}
      <HeroHeader data={headerData} />
      {config.bigSearch && <SearchBar prompt={config.searchPrompt} />}
      {config.splitDisplay && <HeroDetail data={detailData} />}
      {config.heroImage && <HeroImage />}
      {config.navBar && (
        <Navigation
          showBrowse={config.browse}
          showSearch={config.descendantSearch}
        />
      )}
    </Container>
  );
}
