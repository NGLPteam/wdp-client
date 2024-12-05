import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import List from "../../List";
import SeeAll from "../../SeeAll";
import styles from "./Compact.module.css";

export default function CompactListBlock({
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
      <div className={styles.grid}>
        <div className={styles.textColumn}>
          {!!title && <h3 className={styles.header}>{title}</h3>}
          <List variant="COMPACT" bgColor={background} data={entityList} />
        </div>
        {showHeroImage && <div className={styles.heroImage} />}
      </div>
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
