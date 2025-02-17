import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import type { HeroBackground } from "@/types/graphql-schema";
import List from "../../List/";
import SeeAll from "../../SeeAll";
import { getSeeAllHref } from "../../SeeAll/helpers";
import styles from "./Grid.module.css";

export default function GridListBlock({
  data,
  basePath,
  bgOverride,
}: {
  data?: sharedListTemplateFragment$key | null;
  basePath?: string | null;
  bgOverride?: HeroBackground | null;
}) {
  const {
    linksDefinition,
    descendantsDefinition,
    entityList,
    slots,
    seeAllOrdering,
  } = useSharedListTemplateFragment(data);

  const { empty, listItemLayouts } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    seeAllOrderingIdentifier,
    seeAllButtonLabel,
    showHeroImage,
    width,
    showContributors,
    selectionLimit,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const { showEntityContext } = linksDefinition ?? {};

  const { entityContext } = descendantsDefinition ?? {};

  const seeAllHref = descendantsDefinition
    ? getSeeAllHref(basePath, seeAllOrderingIdentifier, undefined)
    : null;

  const renderSeeAll =
    !!seeAllOrderingIdentifier && !!seeAllHref
      ? seeAllOrdering?.count && selectionLimit
        ? seeAllOrdering.count > selectionLimit
        : true
      : false;

  const { blockHeader } = slots ?? {};

  const normalizedContext =
    !!descendantsDefinition && entityContext
      ? entityContext
      : showEntityContext
        ? "FULL"
        : "NONE";

  return (
    <Container
      className={styles.container}
      bgColor={bgOverride ?? background}
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
        bgColor={bgOverride ?? background}
        items={listItemLayouts}
        showContributors={showContributors}
        showContext={normalizedContext}
      />
      {!!renderSeeAll && !!seeAllHref && (
        <SeeAll
          alignment="center"
          buttonLabel={seeAllButtonLabel}
          href={seeAllHref}
        />
      )}
    </Container>
  );
}
