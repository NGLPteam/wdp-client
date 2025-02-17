import classNames from "classnames";
import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import { getBgClass } from "@/components/templates/helpers/bgColor";
import type { HeroBackground } from "@/types/graphql-schema";
import SeeAll from "../../SeeAll";
import { getSeeAllHref } from "../../SeeAll/helpers";
import List from "../../List";
import styles from "./Card.module.css";

export default function CardListBlock({
  data,
  basePath,
  bgOverride,
}: {
  data?: sharedListTemplateFragment$key;
  basePath?: string | null;
  bgOverride?: HeroBackground | null;
}) {
  const { linksDefinition, descendantsDefinition, entityList, seeAllOrdering } =
    useSharedListTemplateFragment(data);

  const { empty, listItemLayouts } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    seeAllOrderingIdentifier,
    seeAllButtonLabel,
    showHeroImage,
    selectionLimit,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const bgClass = getBgClass(bgOverride ?? background);

  const seeAllHref = descendantsDefinition
    ? getSeeAllHref(basePath, seeAllOrderingIdentifier, undefined)
    : null;

  const renderSeeAll =
    !!seeAllOrderingIdentifier && !!seeAllHref
      ? seeAllOrdering?.count && selectionLimit
        ? seeAllOrdering.count > selectionLimit
        : true
      : false;

  return (
    <div className={classNames(bgClass, styles.wrapper)}>
      {showHeroImage && <div className={styles.heroImage} />}
      <List
        variant="CARDS"
        bgColor={bgOverride ?? background}
        items={listItemLayouts}
      />
      {!!renderSeeAll && !!seeAllHref && (
        <SeeAll
          alignment="center"
          buttonLabel={seeAllButtonLabel}
          href={seeAllHref}
        />
      )}
    </div>
  );
}
