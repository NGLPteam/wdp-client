import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { OrderingNavigationTemplateFragment$key } from "@/relay/OrderingNavigationTemplateFragment.graphql";

export type OrderingNavigationTemplateData = {
  config: {
    background: "none" | "light" | "dark";
    variant: "previousNext";
    ordering: Ordering;
  };
};

export default function OrderingNavigationTemplate({
  data,
}: {
  data: OrderingNavigationTemplateFragment$key;
}) {
  const template = useFragment(fragment, data);

  const config = {
    background: "light",
    variant: "previousNext",
    ordering: "issues",
  };

  return (
    <Container bgColor="light">
      {config.variant === "previousNext" && (
        <OrderingNavigation ordering={config.ordering} />
      )}
    </Container>
  );
}

const fragment = graphql`
  fragment OrderingNavigationTemplateFragment on OrderingTemplateInstance {
    slots {
      sampleBlock {
        content
      }
    }
  }
`;
