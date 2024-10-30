import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { DetailTemplateFragment$key } from "@/relay/DetailTemplateFragment.graphql";
import { DetailTemplateEntityFragment$key } from "@/relay/DetailTemplateEntityFragment.graphql";
import Summary from "./Summary";
import Full from "./Full";

export default function DetailTemplate({
  data,
  entityData,
}: {
  data?: DetailTemplateFragment$key | null;
  entityData?: DetailTemplateEntityFragment$key | null;
}) {
  const template = useFragment(fragment, data);
  const entity = useFragment(entityFragment, entityData);

  const { detailDefinition, slots } = template ?? {};

  const { background, variant, showAnnouncements, showHeroImage } =
    detailDefinition ?? {};

  return (
    <Container width="wide" bgColor={background}>
      {variant === "SUMMARY" ? (
        <Summary
          data={slots}
          entityData={entity}
          showAnnouncements={showAnnouncements}
        />
      ) : (
        <Full data={entity} showHeroImage={showHeroImage} />
      )}
      );
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
      ...SummaryDetailFragment
    }
  }
`;

const entityFragment = graphql`
  fragment DetailTemplateEntityFragment on AnyEntity {
    ...FullDetailFragment
    ...SummaryDetailEntityFragment
  }
`;
