import { graphql, useFragment } from "react-relay";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import { sharedListItemsTemplateFragment$key } from "@/relay/sharedListItemsTemplateFragment.graphql";
import {
  useSharedInlineFragment,
  useSharedBlockFragment,
} from "./shared.slots.graphql";

export const listItemsTemplateFragment = graphql`
  fragment sharedListItemsTemplateFragment on TemplateEntityList {
    empty
    count
    depths: listItemLayouts {
      template {
        entity {
          ... on Collection {
            hierarchicalDepth
          }
          ... on Item {
            hierarchicalDepth
          }
        }
      }
    }
    listItemLayouts {
      template {
        entity {
          ... on Collection {
            hierarchicalDepth
          }
          ... on Item {
            hierarchicalDepth
          }
        }
        ...sharedListItemTemplateFragment
        entityList {
          empty
          count
          listItemLayouts {
            template {
              ...sharedListItemTemplateFragment
            }
          }
        }
      }
    }
  }
`;

export const useSharedListItemsTemplateFragment = (
  data?: sharedListItemsTemplateFragment$key | null,
) => {
  const list = useFragment(listItemsTemplateFragment, data);
  const { listItemLayouts, empty, count, depths } = list ?? {};
  const values = depths
    ? ([
        ...new Set(
          depths?.map(({ template }) => template?.entity?.hierarchicalDepth),
        ),
      ].filter((v) => typeof v === "number") as number[])
    : [];
  const treeDepth = { min: Math.min(...values), max: Math.max(...values) };
  return { listItemLayouts, empty, count, treeDepth };
};

export const listItemTemplateFragment = graphql`
  fragment sharedListItemTemplateFragment on ListItemTemplateInstance {
    definition {
      seeAllOrderingIdentifier
    }
    entity {
      ... on Collection {
        __typename
        id
        slug
        title
        hierarchicalDepth
        ...getThumbWithFallbackFragment
        attributions {
          id
        }
        ...ContributorsListFragment
        heroImage {
          large {
            webp {
              alt
              url
              width
              height
            }
          }
          medium {
            webp {
              url
              width
            }
          }
          thumb {
            webp {
              url
              width
            }
          }
        }
      }
      ... on Item {
        __typename
        id
        slug
        title
        hierarchicalDepth
        attributions {
          id
        }
        ...getThumbWithFallbackFragment
        ...ContributorsListFragment
        heroImage {
          large {
            webp {
              alt
              url
              width
              height
            }
          }
          medium {
            webp {
              url
              width
            }
          }
          thumb {
            webp {
              url
              width
            }
          }
        }
      }
    }
    slots {
      contextFull {
        ...sharedInlineSlotFragment
      }
      contextAbbr {
        ...sharedInlineSlotFragment
      }
      contextC {
        ...sharedInlineSlotFragment
      }
      description {
        ...sharedBlockSlotFragment
      }
      header {
        ...sharedInlineSlotFragment
      }
      metaA {
        ...sharedInlineSlotFragment
      }
      metaB {
        ...sharedInlineSlotFragment
      }
      subheader {
        ...sharedInlineSlotFragment
      }
      nestedHeader {
        ...sharedInlineSlotFragment
      }
      nestedSubheader {
        ...sharedInlineSlotFragment
      }
      nestedContext {
        ...sharedInlineSlotFragment
      }
      nestedMetadata {
        ...sharedInlineSlotFragment
      }
    }
  }
`;

export const useSharedListItemTemplateFragment = (
  data?: sharedListItemTemplateFragment$key | null,
) => {
  const template = useFragment(listItemTemplateFragment, data);
  const { slots, entity, definition } = template ?? {};
  const contextAbbr = useSharedInlineFragment(slots?.contextAbbr);
  const contextFull = useSharedInlineFragment(slots?.contextFull);
  const description = useSharedBlockFragment(slots?.description);
  const header = useSharedInlineFragment(slots?.header);
  const metaA = useSharedInlineFragment(slots?.metaA);
  const metaB = useSharedInlineFragment(slots?.metaB);
  const subheader = useSharedInlineFragment(slots?.subheader);
  const nestedHeader = useSharedInlineFragment(slots?.nestedHeader);
  const nestedSubheader = useSharedInlineFragment(slots?.nestedSubheader);
  const nestedContext = useSharedInlineFragment(slots?.nestedContext);
  const nestedMetadata = useSharedInlineFragment(slots?.nestedMetadata);

  return {
    entity,
    definition,
    slots: {
      contextAbbr,
      contextFull,
      description,
      header,
      metaA,
      metaB,
      subheader,
      nestedHeader,
      nestedSubheader,
      nestedContext,
      nestedMetadata,
    },
  };
};
