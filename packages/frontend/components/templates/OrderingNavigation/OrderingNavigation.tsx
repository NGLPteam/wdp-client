export type OrderingNavigationTemplateData = {
  config: {
    background: "none" | "light" | "dark";
    variant: "previousNext";
    ordering: Ordering;
  };
};

export default function OrderingNavigationTemplate(
  data: OrderingNavigationTemplateData
) {
  const { config } = data;

  return (
    <Container bg={config.background}>
      {config.variant === "previousNext" && (
        <OrderingNavigation ordering={config.ordering} />
      )}
    </Container>
  );
}
