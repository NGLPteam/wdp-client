import { graphql, useFragment } from "react-relay";
import { PagesTemplateFragment$key } from "@/relay/PagesTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import type { HeroBackground } from "@/types/graphql-schema";
import List from "./List";

export default function PagesListTemplate({
  data,
}: {
  data?: PagesTemplateFragment$key | null;
  bgOverride?: HeroBackground | null;
}) {
  const template = useFragment(fragment, data);

  const { pagesDefinition, entity, hidden } = template ?? {};

  const { width, background } = pagesDefinition ?? {};

  return !hidden ? (
    <Container bgColor={background} halfWidthTemplate={width === "HALF"}>
      <List data={entity} />
    </Container>
  ) : null;
}

const fragment = graphql`
  fragment PagesTemplateFragment on PageListTemplateInstance {
    __typename
    hidden
    pagesDefinition: definition {
      background
      width
    }
    entity {
      ...ListPagesTemplateFragment
    }
  }
`;
