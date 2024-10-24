"use client";

import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { EntityNavigationTemplateFragment$key } from "@/relay/EntityNavigationTemplateFragment.graphql";

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
  const template = useFragment(fragment, data);

  const { config } = {
    config: {
      background: "light" as const,
      variant: "tabs" as const,
      entityLabel: "community",
    },
  };

  return (
    <Container bgColor={config.background}>
      {false && config.variant === "tabs" && (
        <NavigationTabs entity={config.entityLabel} />
      )}
    </Container>
  );
}

const fragment = graphql`
  fragment EntityNavigationTemplateFragment on NavigationLayoutInstance {
    lastRenderedAt
    template {
      layoutKind
      templateKind
      lastRenderedAt
      slots {
        sampleInline {
          content
        }
        sampleBlock {
          content
        }
      }
    }
  }
`;
