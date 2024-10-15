export type EntityNavigationTemplateData = {
  config: {
    background: "none" | "light" | "dark";
    variant: "tabs";
    entityLabel: string;
  };
};

export default function EntityNavigationTemplate(
  data: EntityNavigationTemplateData
) {
  const { config } = data;

  return (
    <Container bg={config.background}>
      {config.variant === "tabs" && (
        <NavigationTabs entity={config.entityLabel} />
      )}
    </Container>
  );
}
