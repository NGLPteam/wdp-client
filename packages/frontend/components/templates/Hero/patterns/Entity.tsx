import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { EntityHeroHeaderFragment$key } from "@/relay/EntityHeroHeaderFragment.graphql";
import HeroHeader from "../Header";
import HeroImage from "../Image";

export default function EntityHeroHeader({
  data,
}: {
  data?: EntityHeroHeaderFragment$key | null;
}) {
  const layout = useFragment(fragment, data);

  const { template, entity } = layout ?? {};

  const { showHeroImage, background } = template?.definition ?? {};

  const heroImage =
    entity && entity?.__typename !== "%other" ? entity.heroImage : null;

  return (
    <>
      <Container as="header" width="wide" bgColor={background}>
        <HeroHeader data={layout?.template} />
      </Container>
      {showHeroImage && heroImage && <HeroImage data={heroImage} />}
    </>
  );
}

const fragment = graphql`
  fragment EntityHeroHeaderFragment on HeroLayoutInstance {
    entity {
      ... on Collection {
        __typename
        heroImage {
          ...ImageHeroTemplateFragment
        }
      }
      ... on Item {
        __typename
        heroImage {
          ...ImageHeroTemplateFragment
        }
      }
    }
    template {
      definition {
        background
        showHeroImage
      }
      ...HeaderHeroFragment
    }
  }
`;
