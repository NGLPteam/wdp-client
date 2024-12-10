import Image from "next/legacy/image";
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

  const { header, contextA, contextB, metaA, metaB } = slots ?? {};

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
      <NamedLink href={href}>
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
            <h3 className={styles.header}>
              <InlineSlotWrapper content={header.content} />
            </h3>
          )}
          <div className={styles.group}>
            {metaA?.valid && !!metaA.content && (
              <InlineSlotWrapper content={metaA.content} />
            )}
            {metaB?.valid && <InlineSlotWrapper content={metaB.content} />}
          </div>
        </div>
        {!!image && !!image.url && (
          <Image
            className={styles.image}
            role="presentation"
            alt={image.alt || ""}
            src={image.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </NamedLink>
    </li>
  );
}
