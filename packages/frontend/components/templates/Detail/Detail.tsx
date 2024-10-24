import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { DetailTemplateFragment$key } from "@/relay/DetailTemplateFragment.graphql";
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

export default function DetailTemplate({
  data,
}: {
  data: DetailTemplateFragment$key;
}) {
  const template = useFragment(fragment, data);

  const { config, slots } = {
    config: {
      background: "light" as const,
      variant: "summary" as const,
      announcements: false,
      heroImage: true,
    },
    slots: {},
  };

  return (
    <Container bgColor={config.background}>
      {config.variant === "summary" ? (
        <SummaryVariant showAnnouncements={config.announcements} data={slots} />
      ) : (
        <FullVariant showHeroImage={config.heroImage} data={slots} />
      )}
    </Container>
  );
}

const fragment = graphql`
  fragment DetailTemplateFragment on DetailTemplateInstance {
    slots {
      sampleBlock {
        content
      }
    }
  }
`;
