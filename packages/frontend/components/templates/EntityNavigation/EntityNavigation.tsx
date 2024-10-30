"use client";

import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { EntityNavigationTemplateFragment$key } from "@/relay/EntityNavigationTemplateFragment.graphql";
import NavigationTabs from "./NavigationTabs";

export type EntityNavigationTemplateData = {
  config: {
    background: "none" | "light" | "dark";
    variant: "tabs";
    entityLabel: string;
  };
};

export default function EntityNavigationTemplate({
  data,
  skipToId,
}: {
  data?: EntityNavigationTemplateFragment$key | null;
  skipToId: string;
}) {
  const { template } = useFragment(fragment, data) ?? {};

  const { definition, slots } = template ?? {};

  return (
    <Container bgColor={definition?.background}>
      <NavigationTabs data={slots} skipToId={skipToId} />
    </Container>
  );
}

const fragment = graphql`
  fragment EntityNavigationTemplateFragment on NavigationLayoutInstance {
    __typename
    template {
      definition {
        background
      }
      slots {
        ...NavigationTabsFragment
      }
    }
  }
`;
