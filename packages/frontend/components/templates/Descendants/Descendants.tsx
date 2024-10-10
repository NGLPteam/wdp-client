type Descendant = {
  slots: {
    heroImage: AssetImage;
    header: string;
    headerAside: string;
    subtitle: string;
    metadata: string;
  };
};

type DescendantsTemplateData = {
  properties: {
    background: "none" | "light" | "dark";
    blockTitle: string;
    variant: "cards" | "promos" | "compact" | "summary" | "grid";
  };
  visibility: {
    seeAll: boolean;
    hero: boolean;
  };
  slots: {
    heroImage: AssetImage;
    descendants: Descendant[];
  };
};

/*
  Questions
  - Hero image slot vs images for descendants?
*/

/*
  Needs other fragment data:
  - heroImage
*/

export default function Descendants() {
  return <></>;
}
