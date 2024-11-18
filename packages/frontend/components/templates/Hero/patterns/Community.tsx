import { graphql, useFragment } from "react-relay";
import { CommunityHeroHeaderFragment$key } from "@/relay/CommunityHeroHeaderFragment.graphql";
import HeroHeader from "../Header";
import HeroImage from "../Image";
import * as Styled from "./patterns.styles";

export default function CommunityHeroHeader({
  data,
}: {
  data?: CommunityHeroHeaderFragment$key | null;
}) {
  const layout = useFragment(fragment, data);

  const { template, entity } = layout ?? {};

  const { heroImageLayout } = entity ?? {};

  const { showHeroImage } = template?.definition ?? {};

  return (
    <section
      className={
        heroImageLayout === "ONE_COLUMN" ? "a-bg-neutral90" : undefined
      }
    >
      <Styled.Grid>
        <HeroHeader data={template} layout={heroImageLayout} />
        {showHeroImage && entity?.heroImage && (
          <HeroImage data={entity?.heroImage} layout={heroImageLayout} />
        )}
      </Styled.Grid>
    </section>
  );
}

const fragment = graphql`
  fragment CommunityHeroHeaderFragment on HeroLayoutInstance {
    entity {
      ... on Community {
        heroImage {
          ...ImageHeroTemplateFragment
        }
        heroImageLayout
      }
    }
    template {
      definition {
        showHeroImage
      }
      ...HeaderHeroFragment
    }
  }
`;
