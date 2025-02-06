import { graphql, useFragment } from "react-relay";
import { sharedBlockSlotFragment$key } from "@/relay/sharedBlockSlotFragment.graphql";
import { sharedInlineSlotFragment$key } from "@/relay/sharedInlineSlotFragment.graphql";

export const templateSlotBlockFragment = graphql`
  fragment sharedBlockSlotFragment on TemplateSlotBlockInstance {
    empty
    content
    kind
    valid
  }
`;

export const templateSlotInlineFragment = graphql`
  fragment sharedInlineSlotFragment on TemplateSlotInlineInstance {
    empty
    content
    kind
    valid
    hidesTemplate
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
