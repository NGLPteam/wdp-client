export type PagesTemplateData = {
  properties: {
    background: "none" | "light" | "dark";
  };
};

/*
  Needs other fragment data:
  - pages
*/

export default function OrderingNavigationTemplate(data: PagesTemplateData) {
  return (
    <Container bg={data.properties.background}>
      <PagesList />
    </Container>
  );
}
