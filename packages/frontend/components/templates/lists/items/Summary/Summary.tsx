import CoverImage from "@/components/atomic/images/CoverImage";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import NamedLink from "@/components/atomic/links/NamedLink";
import ReadMoreLink from "@/components/atomic/links/Link/patterns/ReadMoreLink";
import { getRouteByEntityType } from "@/helpers/routes";
import styles from "./Summary.module.css";

export default function SummaryListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, subheader, contextA, contextB, metaA, metaB, description } =
    slots ?? {};

  if (!(entity?.__typename === "Item" || entity?.__typename === "Collection"))
    return null;

  const href = `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`;

  return (
    <li className={styles.item}>
      <div className={styles.coverImage}>
        <CoverImage {...entity} maxWidth={120} maxHeight={160} />
      </div>
      <div className={styles.text}>
        <div className={styles.group}>
          {contextA?.valid && !!contextA.content && (
            <InlineSlotWrapper content={contextA.content} />
          )}
          {contextB?.valid && !!contextB.content && (
            <InlineSlotWrapper content={contextB.content} />
          )}
        </div>
        {header?.valid && !!header.content && (
          <h4 className={styles.header}>
            <InlineSlotWrapper content={header.content} />
          </h4>
        )}
        {subheader?.valid && !!subheader.content && (
          <span className={styles.subheader}>
            <InlineSlotWrapper content={subheader.content} />
          </span>
        )}
        {entity?.contributions && (
          <span className={styles.contributors}>
            <ContributorsList data={entity.contributions} />
          </span>
        )}
        <div className={styles.group}>
          {metaA?.valid && !!metaA.content && (
            <InlineSlotWrapper content={metaA.content} />
          )}
          {metaB?.valid && <InlineSlotWrapper content={metaB.content} />}
        </div>
        {description?.valid && !!description.content && (
          <div className={styles.summary}>
            <BlockSlotWrapper content={description.content} />
          </div>
        )}
        {href && (
          <NamedLink href={href}>
            <ReadMoreLink className={styles.readMore} />
          </NamedLink>
        )}
      </div>
    </li>
  );
}
