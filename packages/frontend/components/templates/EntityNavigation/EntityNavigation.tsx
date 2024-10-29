"use client";

import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { EntityNavigationTemplateFragment$key } from "@/relay/EntityNavigationTemplateFragment.graphql";
import { useSharedInlineFragment } from "@/components/templates/shared.graphql";

export type EntityNavigationTemplateData = {
  config: {
    background: "none" | "light" | "dark";
    variant: "tabs";
    entityLabel: string;
  };
};

export default function EntityNavigationTemplate({
  data,
}: {
  data?: EntityNavigationTemplateFragment$key | null;
}) {
  const { template } = useFragment(fragment, data) ?? {};

  const { definition, slots } = template ?? {};

  const entityLabel = useSharedInlineFragment(slots?.entityLabel);

  return (
    <Container bgColor={definition?.background}>
      {/*<NavigationTabs entity={entityLabel} />*/}
      {entityLabel?.content}
    </Container>
  );
}

const fragment = graphql`
  fragment EntityNavigationTemplateFragment on NavigationLayoutInstance {
    __typename
    lastRenderedAt
    template {
      layoutKind
      templateKind
      lastRenderedAt
      definition {
        background
      }
      slots {
        entityLabel {
          ...sharedInlineSlotFragment
        }
      }
    }
  }
`;
