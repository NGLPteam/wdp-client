import type { Slot } from "../templates.types";

export type DetailTemplateData = {
  config: {
    background: "none" | "light" | "dark";
    variant: "summary" | "full";
    heroImage: boolean;
    announcements: boolean;
  };
  slots: {
    header: Slot;
    subheader: Slot;
    summary: Slot;
  };
};

export default function DetailTemplate(data: DetailTemplateData) {
  const { config, slots } = data;

  return (
    <Container bg={config.background}>
      {config.variant === "summary" ? (
        <SummaryVariant showAnnouncements={config.announcements} data={slots} />
      ) : (
        <FullVariant showHeroImage={config.heroImage} data={slots} />
      )}
    </Container>
  );
}
