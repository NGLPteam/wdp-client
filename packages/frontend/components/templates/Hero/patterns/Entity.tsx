import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import BreadcrumbsBar from "@/components/layout/BreadcrumbsBar";
import { EntityHeroHeaderFragment$key } from "@/relay/EntityHeroHeaderFragment.graphql";
import { getBgClass } from "@/components/templates/helpers/bgColor";
import HeroDetail from "../Detail";
import HeroHeader from "../Header";
import HeroImage from "../Image";

export default function EntityHeroHeader({
  data,
}: {
  data?: EntityHeroHeaderFragment$key | null;
}) {
  const layout = useFragment(fragment, data);

  const { template, entity } = layout ?? {};

  const {
    showHeroImage,
    background,
    showBreadcrumbs,
    showSharingLink,
    showSplitDisplay,
  } = template?.definition ?? {};

  const renderBreadcrumbs = !!(showBreadcrumbs || showSharingLink);

  const bgClass = getBgClass(background);

  return (
    <>
      {renderBreadcrumbs && (
        <BreadcrumbsBar
          data={entity}
          showShare={showSharingLink ?? false}
          className={bgClass}
        />
      )}
      <Container as="header" width="wide" bgColor={background}>
        <HeroHeader data={layout?.template} />
      </Container>
      {showHeroImage && entity?.heroImage && (
        <HeroImage data={entity.heroImage} />
      )}
      {showSplitDisplay && (
        <Container bgColor={background}>
          <HeroDetail data={layout?.template} />
        </Container>
      )}
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
      ...BreadcrumbsBarFragment
    }
    template {
      definition {
        background
        showHeroImage
        showBreadcrumbs
        showSharingLink
        showSplitDisplay
      }
      ...HeaderHeroFragment
      ...DetailHeroFragment
    }
  }
`;
