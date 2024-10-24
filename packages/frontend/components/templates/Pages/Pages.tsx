import { graphql, useFragment } from "react-relay";
import { PagesTemplateFragment$key } from "@/relay/PagesTemplateFragment.graphql";
import Container from "@/components/layout/Container";

export type PagesTemplateData = {
  config: {
    background: "none" | "light" | "dark";
  };
};

/*
  Needs other fragment data:
  - pages
*/

export default function PagesListTemplate({
  data,
}: {
  data: PagesTemplateFragment$key;
}) {
  const template = useFragment(fragment, data);

  return (
    <Container bgColor="light">
      <PagesList />
    </Container>
  );
}

const fragment = graphql`
  fragment PagesTemplateFragment on PageListTemplateInstance {
    slots {
      sampleBlock {
        content
      }
    }
  }
`;
