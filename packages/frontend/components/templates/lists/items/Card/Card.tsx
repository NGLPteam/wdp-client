import classNames from "classnames";
import CoverImage from "@/components/atomic/images/CoverImage";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import NamedLink from "@/components/atomic/links/NamedLink";
import { getRouteByEntityType } from "@/helpers/routes";
import styles from "./Card.module.css";

export default function CardListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
  hideCover?: boolean;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, subheader, contextA, contextB, contextC, metaA, metaB } =
    slots ?? {};

  if (!(entity?.__typename === "Item" || entity?.__typename === "Collection"))
    return null;

  const href = `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`;

  return (
    <li className={styles.item}>
      <NamedLink href={href}>
        <div className={styles.inner}>
          <div className={classNames("a-bg-neutral90", styles.coverWrapper)}>
            <div className={styles.coverInner}>
              <CoverImage
                title={entity.title}
                id={entity.id}
                data={entity.thumbnail}
                maxWidth={225}
                maxHeight={300}
              />
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.titleBlock}>
              {contextA?.valid && !!contextA.content && (
                <span className={styles.contextOne}>
                  <InlineSlotWrapper content={contextA.content} />
                </span>
              )}
              {header?.valid && !!header.content && (
                <h4 className="line-clamp-2">
                  <InlineSlotWrapper content={header.content} />
                </h4>
              )}
              {subheader?.valid && !!subheader.content && (
                <span className={styles.subheader}>
                  <InlineSlotWrapper content={subheader.content} />
                </span>
              )}
              <ContributorsList data={entity?.contributions} noLinks />
            </div>
            {(metaA?.valid || metaB?.valid) && (
              <div className={styles.group}>
                {metaA?.valid && !!metaA.content && (
                  <InlineSlotWrapper content={metaA.content} />
                )}
                {metaB?.valid && <InlineSlotWrapper content={metaB.content} />}
              </div>
            )}
            {(contextB?.valid || contextC?.valid) && (
              <div className={styles.group}>
                {contextB?.valid && !!contextB.content && (
                  <InlineSlotWrapper content={contextB.content} />
                )}
                {contextC?.valid && !!contextC.content && (
                  <InlineSlotWrapper content={contextC.content} />
                )}
              </div>
            )}
          </div>
        </div>
      </NamedLink>
    </li>
  );
}
