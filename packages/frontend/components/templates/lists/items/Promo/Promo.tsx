import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import NamedLink from "@/components/atomic/links/NamedLink";
import { getRouteByEntityType } from "@/helpers/routes";
import styles from "./Promo.module.css";

export default function PromoListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
  hideCover?: boolean;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, contextFull } = slots ?? {};

  const href =
    entity?.__typename === "Item" || entity?.__typename === "Collection"
      ? `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`
      : null;

  const image =
    entity?.__typename === "Item" || entity?.__typename === "Collection"
      ? entity.heroImage?.image.webp
      : null;

  return (
    <li className={styles.item}>
      {!!image && !!image.url && (
        <img
          className={styles.image}
          role="presentation"
          alt={image.alt ?? ""}
          src={image.url}
          loading="lazy"
          decoding="async"
        />
      )}
      <NamedLink href={href}>
        <div className={styles.text}>
          <div className={styles.group}>
            {contextFull?.valid && !!contextFull.content && (
              <InlineSlotWrapper content={contextFull.content} />
            )}
          </div>
          {header?.valid && !!header.content && (
            <h3 className={styles.header}>
              <InlineSlotWrapper content={header.content} />
            </h3>
          )}
        </div>
      </NamedLink>
    </li>
  );
}
