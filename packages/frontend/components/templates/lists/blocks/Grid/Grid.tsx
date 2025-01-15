import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import List from "../../List/";
import SeeAll from "../../SeeAll";
import { getSeeAllHref } from "../../SeeAll/helpers";
import styles from "./Grid.module.css";

export default function GridListBlock({
  data,
  basePath,
}: {
  data?: sharedListTemplateFragment$key | null;
  basePath?: string | null;
}) {
  const { linksDefinition, descendantsDefinition, entityList, slots } =
    useSharedListTemplateFragment(data);

  const { empty, listItemLayouts } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    seeAllOrderingIdentifier,
    seeAllButtonLabel,
    selectionMode,
    showHeroImage,
    width,
    showContributors,
    showEntityContext,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const { selectionPropertyPath, orderingIdentifier } =
    descendantsDefinition ?? {};

  const seeAllHref = descendantsDefinition
    ? getSeeAllHref(
        basePath,
        selectionMode,
        seeAllOrderingIdentifier ?? orderingIdentifier,
        selectionPropertyPath,
      )
    : null;

  const { blockHeader } = slots ?? {};

  return (
    <Container
      className={styles.container}
      bgColor={background}
      halfWidthTemplate={width === "HALF"}
    >
      {showHeroImage && <div className={styles.heroImage} />}
      {!!blockHeader?.content && blockHeader?.valid && (
        <h3>
          <InlineSlotWrapper content={blockHeader.content} />
        </h3>
      )}
      <List
        variant="GRID"
        bgColor={background}
        items={listItemLayouts}
        showContributors={showContributors}
        showContext={showEntityContext}
      />
      {!!seeAllOrderingIdentifier && !!seeAllHref && (
        <SeeAll
          alignment="center"
          buttonLabel={seeAllButtonLabel}
          href={seeAllHref}
        />
      )}
    </Container>
  );
}
