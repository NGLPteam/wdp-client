export type ContributorsTemplateData = {
  properties: {
    background: "none" | "light" | "dark";
    max: number;
  };
};

export default function ContributorsTemplate(data: ContributorsTemplateData) {
  return (
    <Container bg={data.properties.background}>
      <ContributorsBlock max={data.properties.max} />
    </Container>
  );
}
