import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import NamedLink from "@/components/atomic/links/NamedLink";
import CoverImage from "@/components/atomic/images/CoverImage";
import Container from "@/components/layout/Container";
import { getRouteByEntityType } from "@/helpers/routes";
import SeeAll from "../../SeeAll";
import List from "../../List/";
import styles from "./Summary.module.css";

export default function SummaryListBlock({
  data,
  basePath,
}: {
  data?: sharedListTemplateFragment$key | null;
  basePath?: string | null;
}) {
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
    // showEntityContext,
  } = linksDefinition ?? descendantsDefinition ?? {};

  const { header, subtitle, metadata } = slots ?? {};

  const href =
    entity?.__typename === "Item" || entity?.__typename === "Collection"
      ? `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`
      : null;

  const showHeroImage = false;

  return (
    <Container className={styles.container} bgColor={background}>
      <div className={styles.grid}>
        <div className={styles.textColumn}>
          {!!title && <h3 className={styles.header}>{title}</h3>}
          <div className={styles.entity}>
            {/*{showEntityContext && context?.valid && (
              <Styled.Context>{context.content}</Styled.Context>
            )}*/}
            <NamedLink href={href}>
              {header?.valid && !!header.content && (
                <h4 className="t-h3">{header.content}</h4>
              )}
              {subtitle?.valid && !!subtitle.content && (
                <span className={styles.subheader}>{subtitle.content}</span>
              )}
            </NamedLink>
            {metadata?.valid && !!metadata.content && (
              <span className={styles.metadata}>{metadata.content}</span>
            )}
          </div>
          <List variant="SUMMARY" bgColor={background} data={entityList} />
          {!!showSeeAllButton && selectionMode === "NAMED" && (
            <SeeAll
              alignment="left"
              buttonLabel={seeAllButtonLabel}
              href={`${basePath}/${descendantsDefinition?.orderingIdentifier}`}
            />
          )}
        </div>
        {showHeroImage && (
          <div className={styles.heroImage}>
            <NamedLink href={href}>
              <CoverImage {...entity} maxWidth={168} maxHeight={248} />
            </NamedLink>
          </div>
        )}
      </div>
    </Container>
  );
}
