import { readInlineData, graphql } from "relay-runtime";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import { useSharedInlineFragment } from "./shared.slots.graphql";
import {
  useSharedListItemsTemplateFragment,
  useSharedListItemTemplateFragment,
} from "./shared.listItems.graphql";

export const listTemplateFragment = graphql`
  fragment sharedListTemplateFragment on AnyMainTemplateInstance @inline {
    ... on LinkListTemplateInstance {
      entity {
        ... on Community {
          __typename
          slug
        }
        ... on Collection {
          __typename
          slug
          thumbnail {
            ...CoverImageFragment
          }
        }
        ... on Item {
          __typename
          slug
          thumbnail {
            ...CoverImageFragment
          }
        }
      }
      linksDefinition: definition {
        background
        seeAllButtonLabel
        showSeeAllButton
        selectionMode
        selectionLimit
        showEntityContext
        title
        variant
        showHeroImage
        width
        showNestedEntities
        seeAllOrderingIdentifier
        showContributors
      }
      slots {
        blockHeader {
          ...sharedInlineSlotFragment
        }
        header {
          ...sharedInlineSlotFragment
        }
        headerAside {
          ...sharedInlineSlotFragment
        }
        metadata {
          ...sharedInlineSlotFragment
        }
        subtitle {
          ...sharedInlineSlotFragment
        }
      }
      entityList {
        count
        empty
        ...sharedListItemsTemplateFragment
      }
    }
    ... on DescendantListTemplateInstance {
      entity {
        ... on Community {
          __typename
          slug
        }
        ... on Collection {
          __typename
          id
          title
          slug
          thumbnail {
            ...CoverImageFragment
          }
        }
        ... on Item {
          __typename
          id
          title
          slug
          thumbnail {
            ...CoverImageFragment
          }
        }
      }
      descendantsDefinition: definition {
        background
        seeAllButtonLabel
        showSeeAllButton
        selectionMode
        selectionPropertyPath
        orderingIdentifier
        dynamicOrderingDefinition {
          filter {
            schemas {
              namespace
              identifier
            }
          }
        }
        selectionLimit
        showEntityContext
        title
        variant
        showHeroImage
        width
        showNestedEntities
        seeAllOrderingIdentifier
        showContributors
      }
      slots {
        blockHeader {
          ...sharedInlineSlotFragment
        }
        header {
          ...sharedInlineSlotFragment
        }
        headerAside {
          ...sharedInlineSlotFragment
        }
        metadata {
          ...sharedInlineSlotFragment
        }
        subtitle {
          ...sharedInlineSlotFragment
        }
      }
      entityList {
        ...sharedListItemsTemplateFragment
      }
    }
  }
`;

export const useSharedListTemplateFragment = (
  data?: sharedListTemplateFragment$key | null,
) => {
  const template = readInlineData(listTemplateFragment, data ?? null);
  const {
    slots,
    entityList: entityListFragment,
    linksDefinition,
    descendantsDefinition,
    entity,
  } = template ?? {};
  const entityList = useSharedListItemsTemplateFragment(entityListFragment);
  const blockHeader = useSharedInlineFragment(slots?.blockHeader);
  const header = useSharedInlineFragment(slots?.header);
  const headerAside = useSharedInlineFragment(slots?.headerAside);
  const metadata = useSharedInlineFragment(slots?.metadata);
  const subtitle = useSharedInlineFragment(slots?.subtitle);

  const { showNestedEntities } = descendantsDefinition ?? linksDefinition ?? {};

  const listData = useSharedListItemsTemplateFragment(entityListFragment);
  const childFragment = listData.listItemLayouts?.[0];
  const { template: childTemplate } = childFragment ?? {};
  const child = useSharedListItemTemplateFragment(childTemplate);

  if (showNestedEntities) {
    const { slots: childSlots, entity: childEntity } = child ?? {};
    const childHeader = childSlots?.header;
    const childMetadata = childSlots?.metaA;
    const childSubtitle = childSlots?.subheader;
    const childContext = childSlots?.contextFull;
    const { entityList: nestedEntityList } = childTemplate ?? {};

    return {
      entity: childEntity,
      entityList: nestedEntityList,
      slots: {
        blockHeader,
        header: childHeader,
        subtitle: childSubtitle,
        metadata: childMetadata,
        context: childContext,
      },
      linksDefinition,
      descendantsDefinition,
    };
  }

  return {
    entity,
    entityList,
    linksDefinition,
    descendantsDefinition,
    slots: { blockHeader, header, headerAside, metadata, subtitle },
  };
};
