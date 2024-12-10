import { graphql, useFragment } from "react-relay";
import { PagesTemplateFragment$key } from "@/relay/PagesTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import List from "./List";

export default function PagesListTemplate({
  data,
}: {
  data?: PagesTemplateFragment$key | null;
}) {
  const template = useFragment(fragment, data);

  const { pagesDefinition, entity } = template ?? {};

  const { width, background } = pagesDefinition ?? {};

  return (
    <Container bgColor={background} halfWidthTemplate={width === "HALF"}>
      <List data={entity} />
    </Container>
  );
}

const fragment = graphql`
  fragment PagesTemplateFragment on PageListTemplateInstance {
    __typename
    pagesDefinition: definition {
      background
      width
    }
    entity {
      ...ListPagesTemplateFragment
    }
  }
`;
