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

  const { orderingDefinition, hidden } = template ?? {};

  const { background, width } = orderingDefinition ?? {};

  return !hidden ? (
    <Container bgColor={background} halfWidthTemplate={width === "HALF"}>
      <NavButtons data={template} />
    </Container>
  ) : null;
}

const fragment = graphql`
  fragment OrderingNavigationTemplateFragment on OrderingTemplateInstance {
    hidden
    orderingDefinition: definition {
      background
      width
    }
    ...NavButtonsFragment
  }
`;
