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

  const { empty } = entityList ?? {};

  if (empty) return null;

  const {
    background,
    title,
    showSeeAllButton,
    seeAllButtonLabel,
    selectionMode,
    width,
    showEntityContext,
    showHeroImage,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const { selectionPropertyPath, orderingIdentifier } =
    descendantsDefinition ?? {};

  const { header, headerAside, subtitle, metadata } = slots ?? {};

  const href =
    (entity?.__typename === "Item" || entity?.__typename === "Collection") &&
    entity?.slug !== slug
      ? `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`
      : null;

  const seeAllHref = descendantsDefinition
    ? getSeeAllHref(
        basePath,
        selectionMode,
        orderingIdentifier,
        selectionPropertyPath,
      )
    : null;

  return (
    <Container
      className={styles.container}
      bgColor={background}
      halfWidthTemplate={width === "HALF"}
    >
      <div className={styles.grid}>
        <div className={styles.textColumn}>
          {!!title && <span className={styles.blockTitle}>{title}</span>}
          <div className={styles.entity}>
            <NamedLink href={href}>
              {header?.valid && !!header.content && (
                <h4 className={classNames(styles.title, "t-h3")}>
                  {headerAside?.valid && !!headerAside.content && (
                    <span>
                      <InlineSlotWrapper content={headerAside.content} />,{" "}
                    </span>
                  )}
                  <InlineSlotWrapper content={header.content} />
                </h4>
              )}
            </NamedLink>
            {subtitle?.valid && !!subtitle.content && (
              <span className={styles.subheader}>{subtitle.content}</span>
            )}
            {metadata?.valid && !!metadata.content && (
              <span className={styles.metadata}>{metadata.content}</span>
            )}
          </div>
          <List
            variant="SUMMARY"
            bgColor={background}
            data={entityList}
            hideCovers={!!showHeroImage}
            showContext={showEntityContext}
          />
          {!!showSeeAllButton && !!seeAllHref && (
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
