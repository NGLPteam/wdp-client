import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import type { HeroBackground } from "@/types/graphql-schema";
import List from "../../List";
import SeeAll from "../../SeeAll";
import { getSeeAllHref } from "../../SeeAll/helpers";
import styles from "./Promo.module.css";

export default function PromoListBlock({
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
    selectionLimit,
  } = linksDefinition ?? descendantsDefinition ?? {};

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

  return (
    <Container
      className={styles.container}
      bgColor={bgOverride ?? background}
      halfWidthTemplate={width === "HALF"}
    >
      {!!blockHeader?.content && blockHeader?.valid && (
        <h3>
          <InlineSlotWrapper content={blockHeader.content} />
        </h3>
      )}
      {showHeroImage && <div className={styles.heroImage} />}
      <List
        variant="PROMOS"
        bgColor={bgOverride ?? background}
        items={listItemLayouts}
      />
      {!!renderSeeAll && seeAllHref && (
        <SeeAll
          alignment="left"
          buttonLabel={seeAllButtonLabel}
          href={seeAllHref}
        />
      )}
    </Container>
  );
}
