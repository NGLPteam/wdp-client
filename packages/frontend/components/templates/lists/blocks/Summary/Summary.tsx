import classNames from "classnames";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import NamedLink from "@/components/atomic/links/NamedLink";
import CoverImage from "@/components/atomic/images/CoverImage";
import Container from "@/components/layout/Container";
import { getRouteByEntityType } from "@/helpers/routes";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import type { HeroBackground } from "@/types/graphql-schema";
import { getThumbWithFallback } from "@/helpers";
import SeeAll from "../../SeeAll";
import { getSeeAllHref } from "../../SeeAll/helpers";
import List from "../../List/";
import styles from "./Summary.module.css";

export default function SummaryListBlock({
  data,
  basePath,
  bgOverride,
}: {
  data?: sharedListTemplateFragment$key | null;
  basePath?: string | null;
  bgOverride?: HeroBackground | null;
}) {
  const { t } = useTranslation();

  const { slug } = useParams();

  const {
    linksDefinition,
    descendantsDefinition,
    slots,
    entityList,
    entity,
    seeAllOrdering,
  } = useSharedListTemplateFragment(data);

  const { empty, listItemLayouts } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    seeAllButtonLabel,
    width,
    showHeroImage,
    seeAllOrderingIdentifier,
    showNestedEntities,
    selectionLimit,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const { showEntityContext } = linksDefinition ?? {};

  const { entityContext } = descendantsDefinition ?? {};

  const { blockHeader, header, headerAside, subtitle, metadata, context } =
    slots ?? {};

  const href =
    (entity?.__typename === "Item" || entity?.__typename === "Collection") &&
    entity?.slug !== slug
      ? `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`
      : null;

  const renderEntity = header?.valid || subtitle?.valid || metadata?.valid;

  const browseStyle = !showHeroImage && background === "NONE";

  const normalizedContext =
    !!descendantsDefinition && entityContext
      ? entityContext
      : showEntityContext
        ? "FULL"
        : "NONE";

  const seeAllHref = descendantsDefinition
    ? getSeeAllHref(
        showNestedEntities ? href : basePath,
        seeAllOrderingIdentifier,
        normalizedContext,
      )
    : null;

  const renderSeeAll =
    !!seeAllOrderingIdentifier && !!seeAllHref
      ? seeAllOrdering?.count && selectionLimit
        ? seeAllOrdering.count > selectionLimit
        : true
      : false;

  const seeAllLabel =
    browseStyle && seeAllOrdering?.count
      ? t("nav.see_all_count", {
          count: seeAllOrdering.count,
          ordering: seeAllOrdering.name,
        })
      : seeAllButtonLabel;

  const showCover =
    showHeroImage &&
    (entity?.__typename === "Item" || entity?.__typename === "Collection");

  const thumbnailData = showCover ? getThumbWithFallback(entity) : null;

  return (
    <Container
      className={styles.container}
      bgColor={bgOverride ?? background}
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
              {normalizedContext !== "NONE" &&
                context?.valid &&
                !!context.content && (
                  <span className={styles.context}>
                    <InlineSlotWrapper content={context.content} />
                  </span>
                )}
              <NamedLink href={href}>
                {header?.valid && !!header.content && (
                  <h3 className={classNames(styles.title, "t-h3")}>
                    <span>
                      {headerAside?.valid && !!headerAside.content && (
                        <span>
                          <InlineSlotWrapper content={headerAside.content} />,{" "}
                        </span>
                      )}
                      <InlineSlotWrapper content={header.content} />
                    </span>
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
            bgColor={bgOverride ?? background}
            items={listItemLayouts}
            hideCovers={!!showHeroImage}
            showContext={normalizedContext}
            isNested={showNestedEntities}
            browseStyle={browseStyle}
          />
          {renderSeeAll && !!seeAllHref && (
            <SeeAll
              alignment="left"
              buttonLabel={seeAllLabel}
              href={seeAllHref}
            />
          )}
        </div>
        {showCover && (
          <div className={styles.heroImage}>
            <NamedLink href={href}>
              <CoverImage
                title={entity.title}
                id={entity.id}
                data={thumbnailData?.thumbnail}
                maxWidth={240}
                maxHeight={320}
              />
            </NamedLink>
          </div>
        )}
      </div>
    </Container>
  );
}
