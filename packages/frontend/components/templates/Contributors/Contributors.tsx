export type ContributorsTemplateData = {
  config: {
    background: "none" | "light" | "dark";
    max: number;
  };
};

export default function ContributorsTemplate(data: ContributorsTemplateData) {
  const { config } = data;

  return (
    <Container bg={config.background}>
      <ContributorsBlock max={config.max} />
    </Container>
  );
}
