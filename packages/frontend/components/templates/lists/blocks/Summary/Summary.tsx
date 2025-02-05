import classNames from "classnames";
import { useParams } from "next/navigation";
import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import NamedLink from "@/components/atomic/links/NamedLink";
import CoverImage from "@/components/atomic/images/CoverImage";
import Container from "@/components/layout/Container";
import { getRouteByEntityType } from "@/helpers/routes";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import SeeAll from "../../SeeAll";
import { getSeeAllHref } from "../../SeeAll/helpers";
import List from "../../List/";
import styles from "./Summary.module.css";

export default function SummaryListBlock({
  data,
  basePath,
}: {
  data?: sharedListTemplateFragment$key | null;
  basePath?: string | null;
}) {
  const { slug } = useParams();

  const { linksDefinition, descendantsDefinition, slots, entityList, entity } =
    useSharedListTemplateFragment(data);

  const { empty, listItemLayouts } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    seeAllButtonLabel,
    selectionMode,
    width,
    showEntityContext,
    showHeroImage,
    seeAllOrderingIdentifier,
    showNestedEntities,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const {
    selectionPropertyPath,
    orderingIdentifier,
    dynamicOrderingDefinition,
  } = descendantsDefinition ?? {};

  const { blockHeader, header, headerAside, subtitle, metadata, context } =
    slots ?? {};

  const href =
    (entity?.__typename === "Item" || entity?.__typename === "Collection") &&
    entity?.slug !== slug
      ? `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`
      : null;

  const seeAllHref = descendantsDefinition
    ? showNestedEntities
      ? href
      : getSeeAllHref(
          basePath,
          selectionMode,
          seeAllOrderingIdentifier ?? orderingIdentifier,
          selectionPropertyPath,
          dynamicOrderingDefinition,
        )
    : null;

  const renderEntity = header?.valid || subtitle?.valid || metadata?.valid;

  const browseStyle = !showHeroImage && background === "NONE";

  return (
    <Container
      className={styles.container}
      bgColor={background}
      halfWidthTemplate={width === "HALF"}
    >
      <div className={styles.grid}>
        <div className={styles.textColumn}>
          {blockHeader?.valid && !!blockHeader?.content && (
            <h2
              className={classNames(styles.blockTitle, {
                "t-h4": showNestedEntities,
                "t-h3": !showNestedEntities,
                [styles["blockTitle--browse"]]: browseStyle,
              })}
            >
              <InlineSlotWrapper content={blockHeader.content} />
            </h2>
          )}
          {renderEntity && (
            <div className={styles.entity}>
              {context?.valid && !!context.content && (
                <span className={styles.context}>
                  <InlineSlotWrapper content={context.content} />
                </span>
              )}
              <NamedLink href={href}>
                {header?.valid && !!header.content && (
                  <h3 className={classNames(styles.title, "t-h3")}>
                    {headerAside?.valid && !!headerAside.content && (
                      <span>
                        <InlineSlotWrapper content={headerAside.content} />,{" "}
                      </span>
                    )}
                    <InlineSlotWrapper content={header.content} />
                  </h3>
                )}
              </NamedLink>
              {subtitle?.valid && !!subtitle.content && (
                <span className={styles.subheader}>
                  <InlineSlotWrapper content={subtitle.content} />
                </span>
              )}
              {metadata?.valid && !!metadata.content && (
                <span className={styles.metadata}>
                  <InlineSlotWrapper content={metadata.content} />
                </span>
              )}
            </div>
          )}
          <List
            variant="SUMMARY"
            bgColor={background}
            items={listItemLayouts}
            hideCovers={!!showHeroImage}
            showContext={showEntityContext}
            isNested={showNestedEntities}
            browseStyle={browseStyle}
          />
          {!!seeAllOrderingIdentifier && !!seeAllHref && (
            <SeeAll
              alignment="left"
              buttonLabel={seeAllButtonLabel}
              href={seeAllHref}
            />
          )}
        </div>
        {showHeroImage && (
          <div className={styles.heroImage}>
            <NamedLink href={href}>
              <CoverImage {...entity} maxWidth={240} maxHeight={320} />
            </NamedLink>
          </div>
        )}
      </div>
    </Container>
  );
}
