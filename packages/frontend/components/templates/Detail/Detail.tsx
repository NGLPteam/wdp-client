import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { DetailTemplateFragment$key } from "@/relay/DetailTemplateFragment.graphql";
import SummaryVariant from "./Summary";
import FullVariant from "./Full";

export default function DetailTemplate({
  data,
}: {
  data?: DetailTemplateFragment$key | null;
}) {
  const template = useFragment(fragment, data);

  const { detailDefinition, slots: _slots } = template ?? {};

  const { background, variant, showAnnouncements, showHeroImage } =
    detailDefinition ?? {};

  return (
    <Container bgColor={background}>
      {variant === "SUMMARY" ? (
        <SummaryVariant showAnnouncements={showAnnouncements} />
      ) : (
        <FullVariant showHeroImage={showHeroImage} />
      )}
    </Container>
  );
}

const fragment = graphql`
  fragment DetailTemplateFragment on DetailTemplateInstance {
    __typename
    detailDefinition: definition {
      background
      variant
      showAnnouncements
      showHeroImage
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
      subheader {
        ...sharedInlineSlotFragment
      }
      summary {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
