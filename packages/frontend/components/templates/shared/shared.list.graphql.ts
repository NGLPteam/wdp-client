import { readInlineData, graphql } from "relay-runtime";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import { useSharedInlineFragment } from "./shared.slots.graphql";

export const listTemplateFragment = graphql`
  fragment sharedListTemplateFragment on AnyMainTemplateInstance @inline {
    ... on LinkListTemplateInstance {
      linksDefinition: definition {
        background
        seeAllButtonLabel
        showSeeAllButton
        selectionMode
        selectionLimit
        showEntityContext
        title
        variant
      }
      slots {
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
      descendantsDefinition: definition {
        background
        seeAllButtonLabel
        showSeeAllButton
        selectionMode
        orderingIdentifier
        selectionLimit
        showEntityContext
        title
        variant
      }
      slots {
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
  }
`;

export const useSharedListTemplateFragment = (
  data?: sharedListTemplateFragment$key | null,
) => {
  const template = readInlineData(listTemplateFragment, data ?? null);
  const { slots, ...rest } = template ?? {};
  const header = useSharedInlineFragment(slots?.header);
  const headerAside = useSharedInlineFragment(slots?.headerAside);
  const metadata = useSharedInlineFragment(slots?.metadata);
  const subtitle = useSharedInlineFragment(slots?.subtitle);

  return { ...rest, slots: { header, headerAside, metadata, subtitle } };
};
