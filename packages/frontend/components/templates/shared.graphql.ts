import { graphql, useFragment } from "react-relay";
import { sharedBlockSlotFragment$key } from "@/relay/sharedBlockSlotFragment.graphql";
import { sharedInlineSlotFragment$key } from "@/relay/sharedInlineSlotFragment.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";

export const templateSlotBlockFragment = graphql`
  fragment sharedBlockSlotFragment on TemplateSlotBlockInstance {
    content
    kind
    valid
  }
`;

export const templateSlotInlineFragment = graphql`
  fragment sharedInlineSlotFragment on TemplateSlotInlineInstance {
    content
    kind
    valid
  }
`;

export const useSharedBlockFragment = (
  data?: sharedBlockSlotFragment$key | null,
) => {
  return useFragment(templateSlotBlockFragment, data);
};

export const useSharedInlineFragment = (
  data?: sharedInlineSlotFragment$key | null,
) => {
  return useFragment(templateSlotInlineFragment, data);
};

export const listTemplateFragment = graphql`
  fragment sharedListTemplateFragment on AnyMainTemplateInstance {
    ... on LinkListTemplateInstance {
      linksDefinition: definition {
        background
        seeAllButtonLabel
        showSeeAllButton
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
    }
    ... on DescendantListTemplateInstance {
      descendantsDefinition: definition {
        background
        seeAllButtonLabel
        showSeeAllButton
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
    }
  }
`;

export const useSharedListTemplateFragment = (
  data?: sharedListTemplateFragment$key | null,
) => {
  const template = useFragment(listTemplateFragment, data);
  const { slots, ...definition } = template ?? {};
  const header = useSharedInlineFragment(slots?.header);
  const headerAside = useSharedInlineFragment(slots?.headerAside);
  const metadata = useSharedInlineFragment(slots?.metadata);
  const subtitle = useSharedInlineFragment(slots?.subtitle);

  return { ...definition, slots: { header, headerAside, metadata, subtitle } };
};
