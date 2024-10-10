export type DetailTemplateData = {
  properties: {
    background: "none" | "light" | "dark";
    variant: "summary" | "full";
  };
  visibility: {
    heroImage: boolean;
    announcements: boolean;
  };
  slots: {
    header: string;
    subheader: string;
    summary: string;
  };
};

export default function DetailTemplate(data: DetailTemplateData) {
  const { properties, visibility, slots } = data;

  return (
    <Container bg={properties.background}>
      {properties.variant === "summary" ? (
        <SummaryVariant
          showAnnouncements={visibility.announcements}
          data={slots}
        />
      ) : (
        <FullVariant showHeroImage={visibility.heroImage} data={slots} />
      )}
    </Container>
  );
}
