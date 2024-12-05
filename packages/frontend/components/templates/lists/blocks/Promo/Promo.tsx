import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import List from "../../List";
import SeeAll from "../../SeeAll";
import styles from "./Promo.module.css";

export default function PromoListBlock({
  data,
  basePath,
}: {
  data?: sharedListTemplateFragment$key | null;
  basePath?: string | null;
}) {
  const { linksDefinition, descendantsDefinition, entityList } =
    useSharedListTemplateFragment(data);

  const { empty } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    title,
    showSeeAllButton,
    seeAllButtonLabel,
    selectionMode,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const showHeroImage = false;

  return (
    <Container className={styles.container} bgColor={background}>
      {!!title && <h3>{title}</h3>}
      {showHeroImage && <div className={styles.heroImage} />}
      <List variant="PROMOS" bgColor={background} data={entityList} />
      {!!showSeeAllButton && selectionMode === "NAMED" && (
        <SeeAll
          alignment="left"
          buttonLabel={seeAllButtonLabel}
          href={`${basePath}/${descendantsDefinition?.orderingIdentifier}`}
        />
      )}
    </Container>
  );
}
