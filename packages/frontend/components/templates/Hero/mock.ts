export const mock = {
  config: {
    background: "light" as const,
    searchPrompt: "{{ search prompt }}",
    bigSearch: true,
    heroImage: true,
    thumbnailImage: false,
    splitDisplay: true,
    contributors: true,
    navBar: false,
    descendantSearch: false,
    browse: false,
    share: true,
    breadcrumbs: true,
  },
  slots: {
    header: {
      content: "{{ slots.header }}",
      kind: "inline" as const,
      valid: true,
    },
    headerAside: {
      content: "{{ slots.headerAside }}",
      kind: "inline" as const,
      valid: true,
    },
    headerSummary: {
      content: "{{ slots.summary }}",
      kind: "inline" as const,
      valid: true,
    },
    headerSidebar: {
      content: "{{ slots.headerSidebar }}",
      kind: "inline" as const,
      valid: true,
    },
    subheader: {
      content: "{{ slots.subheader }}",
      kind: "inline" as const,
      valid: true,
    },
    subheaderAside: {
      content: "{{ slots.subheaderAside }}",
      kind: "inline" as const,
      valid: true,
    },
    sidebar: {
      content: "{{ slots.sidebar }}",
      kind: "inline" as const,
      valid: true,
    },
    metadata: {
      content: "{{ slots.metadata }}",
      kind: "inline" as const,
      valid: true,
    },
    summary: {
      content: "{{ slots.summary }}",
      kind: "inline" as const,
      valid: true,
    },
    cta: {
      content: "<button>{{ slots.cta }}</button>",
      kind: "inline" as const,
      valid: true,
    },
  },
};
