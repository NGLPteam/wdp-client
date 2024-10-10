export type EntityNavigationTemplateData = {
  properties: {
    background: "none" | "light" | "dark";
    variant: "tabs";
    entityLabel: string;
  };
};

export default function EntityNavigationTemplate(
  data: EntityNavigationTemplateData
) {
  return (
    <Container bg={data.properties.background}>
      {data.properties.variant === "tabs" && (
        <NavigationTabs entity={data.properties.entityLabel} />
      )}
    </Container>
  );
}
