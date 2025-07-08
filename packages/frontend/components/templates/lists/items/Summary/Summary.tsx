import classNames from "classnames";
import CoverImage from "@/components/atomic/images/CoverImage";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import NamedLink from "@/components/atomic/links/NamedLink";
import { getRouteByEntityType } from "@/helpers/routes";
import { getThumbWithFallback } from "@/helpers";
import type { ListEntityContext } from "@/types/graphql-schema";
import styles from "./Summary.module.css";

export default function SummaryListItem({
  data,
  hideCover,
  showContext,
  isNested,
  browseStyle,
}: {
  data?: sharedListItemTemplateFragment$key | null;
  hideCover?: boolean;
  showContext?: ListEntityContext | null;
  isNested?: boolean | null;
  browseStyle?: boolean | null;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const {
    header: baseHeader,
    subheader: baseSubheader,
    contextFull,
    contextAbbr,
    metaA,
    metaB,
    description,
    nestedHeader,
    nestedSubheader,
    nestedContext,
    nestedMetadata,
  } = slots ?? {};

  if (!(entity?.__typename === "Item" || entity?.__typename === "Collection"))
    return null;

  const href = `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`;

  const renderedSlots = isNested
    ? {
        header: nestedHeader,
        subheader: nestedSubheader,
        context: showContext !== "NONE" ? nestedContext : null,
      }
    : {
        header: baseHeader,
        subheader: baseSubheader,
        context:
          showContext === "NONE"
            ? null
            : showContext === "ABBR"
              ? contextAbbr
              : contextFull,
      };

  const { header, subheader, context } = renderedSlots;

  const thumbnailData = !hideCover ? getThumbWithFallback(entity) : null;
  const showThumb =
    thumbnailData?.hasThumb || entity.__typename === "Collection";

  return (
    <li
      className={classNames(styles.item, {
        [styles["item--browse"]]: browseStyle,
      })}
    >
      {showThumb && (
        <NamedLink href={href} className={styles.coverImage}>
          <CoverImage
            title={entity.title}
            id={entity.id}
            data={thumbnailData?.thumbnail}
            maxWidth={120}
            maxHeight={160}
          />
        </NamedLink>
      )}
      <div className={styles.text}>
        {context?.valid && !!context.content && (
          <div className={styles.group}>
            <InlineSlotWrapper content={context.content} />
          </div>
        )}
        <div className={styles.headerGroup}>
          {header?.valid && !!header.content && (
            <NamedLink href={href}>
              <h4 className={styles.header}>
                <InlineSlotWrapper content={header.content} />
              </h4>
            </NamedLink>
          )}
          {subheader?.valid && !!subheader.content && (
            <span className={styles.subheader}>
              <InlineSlotWrapper content={subheader.content} />
            </span>
          )}
        </div>
        {!!entity?.attributions.length && (
          <span className={styles.contributors}>
            <ContributorsList data={entity} />
          </span>
        )}
        <div className={styles.group}>
          {isNested ? (
            nestedMetadata?.valid &&
            !!nestedMetadata?.content && (
              <InlineSlotWrapper content={nestedMetadata.content} />
            )
          ) : (
            <>
              {metaA?.valid && !!metaA.content && (
                <InlineSlotWrapper content={metaA.content} />
              )}
              {metaB?.valid && <InlineSlotWrapper content={metaB.content} />}
            </>
          )}
        </div>
        {description?.valid && !!description.content && (
          <div className={classNames(styles.summary, "line-clamp-5")}>
            <BlockSlotWrapper content={description.content} />
          </div>
        )}
      </div>
    </li>
  );
}
