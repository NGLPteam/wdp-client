import { mock as mockListItem } from "../lists/mock";

export const mock = {
  config: {
    background: "dark" as const,
    blockTitle: "Links Block",
    variant: "grid" as const,
    seeAll: {
      visible: true,
      buttonLabel: "See All Button Label",
      schema: "nglp:journal",
    },
    heroImage: false,
  },
  slots: {
    heroImage: null,
    items: Array(8).fill(mockListItem),
    entity: {
      context: {
        valid: true,
        content: "{{ slots.entity.context }}",
        kind: "inline" as const,
      },
      header: {
        valid: true,
        content: "{{ slots.entity.header }}",
        kind: "inline" as const,
      },
      subheader: {
        valid: true,
        content: "{{ slots.entity.subtitle }}",
        kind: "inline" as const,
      },
      metadata: {
        valid: true,
        content: "{{ slots.entity.metatdata }}",
        kind: "inline" as const,
      },
    },
  },
};
