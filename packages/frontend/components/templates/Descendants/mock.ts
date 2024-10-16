import { mock as mockListItem } from "../lists/mock";

export const mock = {
  config: {
    background: "light" as const,
    blockTitle: "Descendants Block",
    variant: "summary" as const,
    seeAll: {
      visible: true,
      buttonLabel: "See All Button Label",
      schema: "nglp:journal",
    },
    heroImage: true,
  },
  slots: {
    heroImage: null,
    items: Array(4).fill(mockListItem),
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
