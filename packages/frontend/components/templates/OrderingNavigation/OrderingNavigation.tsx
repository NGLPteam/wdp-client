export type OrderingNavigationTemplateData = {
  properties: {
    background: "none" | "light" | "dark";
    variant: "previousNext";
    ordering: Ordering;
  };
};

export default function OrderingNavigationTemplate(
  data: OrderingNavigationTemplateData
) {
  return (
    <Container bg={data.properties.background}>
      {data.properties.variant === "previousNext" && (
        <OrderingNavigation ordering={data.properties.ordering} />
      )}
    </Container>
  );
}
