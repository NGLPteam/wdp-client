import { graphql, useFragment } from "react-relay";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import { sharedListItemsTemplateFragment$key } from "@/relay/sharedListItemsTemplateFragment.graphql";
import {
  useSharedInlineFragment,
  useSharedBlockFragment,
} from "./shared.slots.graphql";

export const listItemsTemplateFragment = graphql`
  fragment sharedListItemsTemplateFragment on TemplateEntityList {
    listItemLayouts {
      template {
        ...sharedListItemTemplateFragment
      }
    }
  }
`;

export const useSharedListItemsTemplateFragment = (
  data?: sharedListItemsTemplateFragment$key | null,
) => {
  const items = useFragment(listItemsTemplateFragment, data);
  const { listItemLayouts } = items ?? {};
  return listItemLayouts;
};

export const listItemTemplateFragment = graphql`
  fragment sharedListItemTemplateFragment on ListItemTemplateInstance {
    entity {
      ... on Collection {
        id
        title
        thumbnail {
          ...CoverImageFragment
        }
        contributions {
          ...ContributorsListFragment
        }
      }
      ... on Item {
        id
        title
        thumbnail {
          ...CoverImageFragment
        }
        contributions {
          ...ContributorsListFragment
        }
      }
    }
    slots {
      contextA {
        ...sharedInlineSlotFragment
      }
      contextB {
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
    }
  }
`;

export const useSharedListItemTemplateFragment = (
  data?: sharedListItemTemplateFragment$key | null,
) => {
  const template = useFragment(listItemTemplateFragment, data);
  const { slots, entity } = template ?? {};
  const contextA = useSharedInlineFragment(slots?.contextA);
  const contextB = useSharedInlineFragment(slots?.contextB);
  const contextC = useSharedInlineFragment(slots?.contextC);
  const description = useSharedBlockFragment(slots?.description);
  const header = useSharedInlineFragment(slots?.header);
  const metaA = useSharedInlineFragment(slots?.metaA);
  const metaB = useSharedInlineFragment(slots?.metaB);
  const subheader = useSharedInlineFragment(slots?.subheader);

  return {
    entity,
    slots: {
      contextA,
      contextB,
      contextC,
      description,
      header,
      metaA,
      metaB,
      subheader,
    },
  };
};
