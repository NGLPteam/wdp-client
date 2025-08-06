import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const layout = useFragment(fragment, data);

  const { template, entity } = layout ?? {};

  const {
    showHeroImage,
    background,
    showBreadcrumbs,
    showSharingLink,
    showSplitDisplay,
  } = template?.definition ?? {};

  const hidden = !!(entity?.visibility === "HIDDEN" || entity?.currentlyHidden);

  const hiddenAlert = hidden
    ? t("messages.hidden", {
        schema: entity?.schemaDefinition?.identifier.replaceAll("_", " "),
      })
    : undefined;

  const renderBreadcrumbs = !!(showBreadcrumbs || showSharingLink);

  const bgClass = getBgClass(background);

  const renderHeroImage = showHeroImage && entity?.heroImage?.storage;

  return (
    <>
      {renderBreadcrumbs && (
        <BreadcrumbsBar
          data={entity}
          showShare={showSharingLink ?? false}
          className={bgClass}
        />
      )}
      <Container as="header" width="wide" bgColor={background} hideDivider>
        <HeroHeader data={layout?.template} hiddenAlert={hiddenAlert} />
      </Container>
      {showSplitDisplay && (
        <Container bgColor={background} hideDivider>
          <HeroDetail data={layout?.template} />
        </Container>
      )}
      {renderHeroImage && <HeroImage data={entity.heroImage} />}
    </>
  );
}

const fragment = graphql`
  fragment EntityHeroHeaderFragment on HeroLayoutInstance {
    entity {
      ... on Collection {
        __typename
        visibility
        currentlyHidden
        heroImage {
          storage
          ...ImageHeroTemplateFragment
        }
        schemaDefinition {
          identifier
        }
      }
      ... on Item {
        __typename
        visibility
        currentlyHidden
        heroImage {
          storage
          ...ImageHeroTemplateFragment
        }
        schemaDefinition {
          identifier
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
