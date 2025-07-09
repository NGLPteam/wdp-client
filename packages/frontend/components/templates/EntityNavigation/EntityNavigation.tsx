"use client";

import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { EntityNavigationTemplateFragment$key } from "@/relay/EntityNavigationTemplateFragment.graphql";
import { useFullTextCheck } from "../FullTextCheck/FullTextCheck";
import NavigationTabs from "./NavigationTabs";

export default function EntityNavigationTemplate({
  data,
}: {
  data?: EntityNavigationTemplateFragment$key | null;
}) {
  const { template } = useFragment(fragment, data) ?? {};

  const { definition } = template ?? {};

  const hasFullText = useFullTextCheck();

  return template ? (
    <Container bgColor={definition?.background}>
      <NavigationTabs data={template} hasFullText={hasFullText} />
    </Container>
  ) : null;
}

const fragment = graphql`
  fragment EntityNavigationTemplateFragment on NavigationLayoutInstance {
    template {
      definition {
        background
      }
      ...NavigationTabsFragment
    }
  }
`;
