import { graphql, useFragment } from "react-relay";
import { PagesTemplateFragment$key } from "@/relay/PagesTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import { useSharedInlineFragment } from "@/components/templates/shared.graphql";

export default function PagesListTemplate({
  data,
}: {
  data?: PagesTemplateFragment$key | null;
}) {
  const template = useFragment(fragment, data);

  const { pagesDefinition, slots } = template ?? {};

  const header = useSharedInlineFragment(slots?.header);

  return (
    <Container bgColor={pagesDefinition?.background}>
      {/*<PagesList header={header} />*/}
      {header?.content}
    </Container>
  );
}

const fragment = graphql`
  fragment PagesTemplateFragment on PageListTemplateInstance {
    __typename
    pagesDefinition: definition {
      background
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
    }
  }
`;
