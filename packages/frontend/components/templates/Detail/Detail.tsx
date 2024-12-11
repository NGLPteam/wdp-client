import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { DetailTemplateFragment$key } from "@/relay/DetailTemplateFragment.graphql";
import Summary from "./Summary";
import Full from "./Full";

export default function DetailTemplate({
  data,
}: {
  data?: DetailTemplateFragment$key | null;
}) {
  const template = useFragment(fragment, data);

  const { detailDefinition } = template ?? {};

  const { background, variant, showAnnouncements, showHeroImage, width } =
    detailDefinition ?? {};

  return (
    <Container
      width="wide"
      bgColor={background}
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
