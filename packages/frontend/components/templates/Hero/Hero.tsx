import HeroHeader from "./Header";
import HeroDetail from "./Detail";

export type HeroTemplateData = {
  properties: {
    background: "none" | "light" | "dark";
    searchPrompt: string;
  };
  visibility: {
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
    header: string;
    headerAside: string;
    headerSummary: string;
    headerSidebar: string;
    subheader: string;
    subheaderAside: string;
    sidebar: string;
    metadata: string;
    summary: string;
    cta: string;
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
  const { slots, visibility, properties } = data;

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

  const detailData = { ...detailSlots, contributors, thumbnailImage };

  const renderBreadcrumbs = !!(visibility.breadcrumbs || visibility.share);

  return (
    <Container bg={properties.background}>
      {renderBreadcrumbs && <Breadcrumbs />}
      <HeroHeader data={headerData} />
      {visibility.bigSearch && <SearchBar prompt={properties.searchPrompt} />}
      {visibility.splitDisplay && <HeroDetail data={detailData} />}
      {visibility.heroImage && <HeroImage />}
      {visibility.navBar && (
        <Navigation
          showBrowse={visibility.browse}
          showSearch={visibility.descendantSearch}
        />
      )}
    </Container>
  );
}
