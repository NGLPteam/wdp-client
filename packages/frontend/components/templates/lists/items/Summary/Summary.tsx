import classNames from "classnames";
import CoverImage from "@/components/atomic/images/CoverImage";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import NamedLink from "@/components/atomic/links/NamedLink";
import { getRouteByEntityType } from "@/helpers/routes";
import styles from "./Summary.module.css";

export default function SummaryListItem({
  data,
  hideCover,
  showContext,
  isNested,
  className,
}: {
  data?: sharedListItemTemplateFragment$key | null;
  hideCover?: boolean;
  showContext?: boolean | null;
  isNested?: boolean | null;
  className?: string;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const {
    header,
    subheader,
    contextFull,
    contextAbbr,
    metaA,
    metaB,
    description,
  } = slots ?? {};

  if (!(entity?.__typename === "Item" || entity?.__typename === "Collection"))
    return null;

  const href = `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`;

  const context = isNested ? contextAbbr : contextFull;
  const contextVisible = showContext && context?.valid && !!context.content;

  const showThumb =
    !hideCover &&
    (entity.__typename !== "Item" || !!entity?.thumbnail?.image.webp.url);

  return (
    <li className={classNames(styles.item, className)}>
      {showThumb && (
        <NamedLink href={href} className={styles.coverImage}>
          <CoverImage {...entity} maxWidth={120} maxHeight={160} />
        </NamedLink>
      )}
      <div className={styles.text}>
        {contextVisible && (
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
          {metaA?.valid && !!metaA.content && (
            <InlineSlotWrapper content={metaA.content} />
          )}
          {metaB?.valid && <InlineSlotWrapper content={metaB.content} />}
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
