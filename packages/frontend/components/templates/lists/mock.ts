export const mock = {
  slots: {
    thumbnail: null,
    contributors: {
      content: "{{ slots.contributors }}",
      kind: "inline" as const,
      valid: true,
    },
    header: {
      content: "{{ slots.header }}",
      kind: "inline" as const,
      valid: true,
    },
    subheader: {
      content: "{{ slots.subheader }}",
      kind: "inline" as const,
      valid: true,
    },
    metaOne: {
      content: "{{ slots.metaOne }}",
      kind: "inline" as const,
      valid: true,
    },
    metaTwo: {
      content: "{{ slots.metaTwo }}",
      kind: "inline" as const,
      valid: true,
    },
    contextOne: {
      content: "{{ slots.contextOne }}",
      kind: "inline" as const,
      valid: true,
    },
    contextTwo: {
      content: "{{ slots.contextTwo }}",
      kind: "inline" as const,
      valid: true,
    },
    contextThree: {
      content: "{{ slots.contextThree }}",
      kind: "inline" as const,
      valid: true,
    },
    summary: {
      content: "{{ slots.summary }}",
      kind: "block" as const,
      valid: true,
    },
  },
};
