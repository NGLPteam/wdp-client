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
          ...getThumbWithFallbackFragment
        }
        ... on Item {
          __typename
          slug
          ...getThumbWithFallbackFragment
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
      seeAllOrdering {
        count
        name
      }
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
          ...getThumbWithFallbackFragment
        }
        ... on Item {
          __typename
          id
          title
          slug
          ...getThumbWithFallbackFragment
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
        entityContext
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
    seeAllOrdering,
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
    const {
      slots: childSlots,
      entity: childEntity,
      definition: childDefinition,
    } = child ?? {};
    const childHeader = childSlots?.nestedHeader;
    const childMetadata = childSlots?.nestedMetadata;
    const childSubtitle = childSlots?.nestedSubheader;
    const childContext = childSlots?.nestedContext;
    const { entityList: nestedEntityList } = childTemplate ?? {};

    return {
      entity: childEntity,
      entityList: { ...nestedEntityList, treeDepth: null },
      slots: {
        blockHeader,
        header: childHeader,
        subtitle: childSubtitle,
        metadata: childMetadata,
        context: childContext,
      },
      linksDefinition,
      descendantsDefinition: {
        ...descendantsDefinition,
        seeAllOrderingIdentifier: childDefinition?.seeAllOrderingIdentifier,
      },
    };
  }

  return {
    entity,
    entityList,
    linksDefinition,
    descendantsDefinition,
    slots: { blockHeader, header, headerAside, metadata, subtitle },
    seeAllOrdering,
  };
};
