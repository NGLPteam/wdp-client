import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { DetailTemplateFragment$key } from "@/relay/DetailTemplateFragment.graphql";
import type { HeroBackground } from "@/types/graphql-schema";
import Summary from "./Summary";
import Full from "./Full";

export default function DetailTemplate({
  data,
  bgOverride,
}: {
  data?: DetailTemplateFragment$key | null;
  bgOverride?: HeroBackground | null;
}) {
  const template = useFragment(fragment, data);

  const { detailDefinition, hidden } = template ?? {};

  if (hidden) return null;

  const { background, variant, showAnnouncements, showHeroImage, width } =
    detailDefinition ?? {};

  return (
    <Container
      width="wide"
      bgColor={bgOverride ?? background}
      halfWidthTemplate={width === "HALF"}
    >
      {variant === "SUMMARY" ? (
        <Summary data={template} showAnnouncements={showAnnouncements} />
      ) : (
        <Full data={template} showHeroImage={showHeroImage} />
      )}
    </Container>
  );
}

const fragment = graphql`
  fragment DetailTemplateFragment on DetailTemplateInstance {
    __typename
    hidden
    detailDefinition: definition {
      background
      variant
      showAnnouncements
      showHeroImage
      width
    }
    ...SummaryDetailFragment
    ...FullDetailFragment
  }
`;
