import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import List from "../../List";
import SeeAll from "../../SeeAll";
import { getSeeAllHref } from "../../SeeAll/helpers";
import styles from "./Promo.module.css";

export default function PromoListBlock({
  data,
  basePath,
}: {
  data?: sharedListTemplateFragment$key | null;
  basePath?: string | null;
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
      bgColor={background}
      halfWidthTemplate={width === "HALF"}
    >
      {!!blockHeader?.content && blockHeader?.valid && (
        <h3>
          <InlineSlotWrapper content={blockHeader.content} />
        </h3>
      )}
      {showHeroImage && <div className={styles.heroImage} />}
      <List variant="PROMOS" bgColor={background} items={listItemLayouts} />
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
