import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { OrderingNavigationTemplateFragment$key } from "@/relay/OrderingNavigationTemplateFragment.graphql";
import NavButtons from "./NavButtons";

export default function OrderingNavigationTemplate({
  data,
}: {
  data?: OrderingNavigationTemplateFragment$key | null;
}) {
  const template = useFragment(fragment, data);

  const { orderingDefinition, slots } = template ?? {};

  return (
    <Container bgColor={orderingDefinition?.background}>
      <NavButtons data={slots} ordering="needs_to_be_added" />
    </Container>
  );
}

const fragment = graphql`
  fragment OrderingNavigationTemplateFragment on OrderingTemplateInstance {
    __typename
    orderingDefinition: definition {
      background
    }
    slots {
      ...NavButtonsFragment
    }
  }
`;
