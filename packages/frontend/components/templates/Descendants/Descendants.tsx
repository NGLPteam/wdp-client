type Descendant = {
  slots: {
    thumbnail: AssetImage;
    header: string;
    headerAside: string;
    subtitle: string;
    metadata: string;
  };
};

export type DescendantsTemplateData = {
  properties: {
    background: "none" | "light" | "dark";
    blockTitle: string;
    variant: "cards" | "promos" | "compact" | "summary" | "grid";
    seeAll: {
      buttonLabel: string;
      schema: SchemaEnum;
    };
  };
  visibility: {
    seeAll: boolean;
    heroImage: boolean;
  };
  slots: {
    heroImage: AssetImage;
    descendants: Descendant[];
  };
};

/*
  Questions
  - Hero image slot vs images for descendants?
  - Is schema enough to determine route for see all?
*/

/*
  Needs other fragment data:
  - heroImage
*/

const LIST_COMPONENT_MAP = {
  cards: "",
  promos: "",
  compact: "",
  summary: "",
  grid: "",
};

export default function Descendants(data: DescendantsTemplateData) {
  const { properties, visibility, slots } = data;

  const ListComponent = LIST_COMPONENT_MAP[properties.variant];

  const seeAllProps = visibility.seeAll ? { seeAll: properties.seeAll } : {};

  return (
    <Container bg={properties.background}>
      {!!properties.blockTitle && <h3>{properties.blockTitle}</h3>}
      {visibility.heroImage && <HeroImage data={slots.heroImage} />}
      <ListComponent data={slots.descendants} {...seeAllProps} />
    </Container>
  );
}
