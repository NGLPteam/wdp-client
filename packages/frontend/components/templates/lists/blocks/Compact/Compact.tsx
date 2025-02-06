import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import List from "../../List";
import SeeAll from "../../SeeAll";
import { getSeeAllHref } from "../../SeeAll/helpers";
import styles from "./Compact.module.css";

export default function CompactListBlock({
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

  const { background, seeAllOrderingIdentifier, seeAllButtonLabel, width } =
    linksDefinition ?? descendantsDefinition ?? {};

  const { dynamicOrderingDefinition } = descendantsDefinition ?? {};

  const seeAllHref = descendantsDefinition
    ? getSeeAllHref(
        basePath,
        seeAllOrderingIdentifier,
        undefined,
        dynamicOrderingDefinition,
      )
    : null;

  const { blockHeader } = slots ?? {};

  return (
    <Container
      className={styles.container}
      bgColor={background}
      halfWidthTemplate={width === "HALF"}
    >
      <div className={styles.grid}>
        <div className={styles.textColumn}>
          {blockHeader?.valid && !!blockHeader?.content && (
            <h3 className={styles.header}>
              <InlineSlotWrapper content={blockHeader.content} />
            </h3>
          )}
          <List
            variant="COMPACT"
            bgColor={background}
            items={listItemLayouts}
          />
        </div>
        {/*
          Need to identify which image to use here
          {showHeroImage && <div className={styles.heroImage} />}
          */}
        {!!seeAllOrderingIdentifier && !!seeAllHref && (
          <SeeAll
            alignment="left"
            buttonLabel={seeAllButtonLabel}
            href={seeAllHref}
            className={styles.seeAll}
          />
        )}
      </div>
    </Container>
  );
}
