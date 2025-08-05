import Container from "@/components/layout/Container";
import type { HeroBackground } from "@/types/graphql-schema";
import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import { getSeeAllHref } from "../../SeeAll/helpers";
import List from "../../List";
import SeeAll from "../../SeeAll";

import styles from "./Tree.module.css";

export default function TreeListBlock({
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
    slots,
    entityList,
    seeAllOrdering,
  } = useSharedListTemplateFragment(data);

  const { empty, listItemLayouts, treeDepth } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    seeAllOrderingIdentifier,
    seeAllButtonLabel,
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
      {blockHeader?.valid && !!blockHeader?.content && (
        <h3 className={styles.header}>
          <InlineSlotWrapper content={blockHeader.content} />
        </h3>
      )}
      <List
        variant="TREE"
        bgColor={bgOverride ?? background}
        items={listItemLayouts}
        treeDepth={treeDepth}
      />
      {!!renderSeeAll && !!seeAllHref && (
        <SeeAll
          alignment="left"
          buttonLabel={seeAllButtonLabel}
          href={seeAllHref}
          className={styles.seeAll}
        />
      )}
    </Container>
  );
}
