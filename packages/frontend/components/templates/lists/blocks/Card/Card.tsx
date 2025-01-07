import classNames from "classnames";
import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import { getBgClass } from "@/components/templates/helpers/bgColor";
import SeeAll from "../../SeeAll";
import { getSeeAllHref } from "../../SeeAll/helpers";
import List from "../../List";
import styles from "./Card.module.css";

export default function CardListBlock({
  data,
  basePath,
}: {
  data?: sharedListTemplateFragment$key;
  basePath?: string | null;
}) {
  const { linksDefinition, descendantsDefinition, entityList } =
    useSharedListTemplateFragment(data);

  const { empty } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    showSeeAllButton,
    seeAllButtonLabel,
    selectionMode,
    showHeroImage,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const { selectionPropertyPath, orderingIdentifier } =
    descendantsDefinition ?? {};

  const bgClass = getBgClass(background);

  const seeAllHref = descendantsDefinition
    ? getSeeAllHref(
        basePath,
        selectionMode,
        orderingIdentifier,
        selectionPropertyPath,
      )
    : null;

  return (
    <div className={classNames(bgClass, styles.wrapper)}>
      {showHeroImage && <div className={styles.heroImage} />}
      <List variant="CARDS" bgColor={background} data={entityList} />
      {!!showSeeAllButton && !!seeAllHref && (
        <SeeAll
          alignment="center"
          buttonLabel={seeAllButtonLabel}
          href={seeAllHref}
        />
      )}
    </div>
  );
}
