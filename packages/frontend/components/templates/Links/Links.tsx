import type { Slot } from "../templates.types";

type Link = {
  slots: {
    thumbnail: AssetImage;
    header: Slot;
    headerAside: Slot;
    subtitle: Slot;
    metadata: Slot;
  };
};

export type LinksTemplateData = {
  config: {
    background: "none" | "light" | "dark";
    blockTitle: string;
    variant: "cards" | "promos" | "compact" | "summary" | "grid";
    seeAll: {
      visible: boolean;
      buttonLabel: string;
      schema: SchemaEnum;
    };
    heroImage: boolean;
  };
  slots: {
    heroImage: AssetImage;
    descendants: Link[];
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

export default function Links(data: LinksTemplateData) {
  const { config, slots } = data;

  const ListComponent = LIST_COMPONENT_MAP[config.variant];

  const seeAllProps = config.seeAll.visible ? { seeAll: config.seeAll } : {};

  return (
    <Container bg={config.background}>
      {!!config.blockTitle && <h3>{config.blockTitle}</h3>}
      {config.heroImage && <HeroImage data={slots.heroImage} />}
      <ListComponent data={slots.descendants} {...seeAllProps} />
    </Container>
  );
}
