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

export default function OrderingNavigationTemplate(data: PagesTemplateData) {
  const { config } = data;

  return (
    <Container bg={config.background}>
      <PagesList />
    </Container>
  );
}
