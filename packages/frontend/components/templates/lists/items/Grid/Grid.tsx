import classNames from "classnames";
import CoverImage from "@/components/atomic/images/CoverImage";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import NamedLink from "@/components/atomic/links/NamedLink";
import { getRouteByEntityType } from "@/helpers/routes";
import styles from "./Grid.module.css";

export default function GridListItem({
  data,
}: {
  data?: sharedListItemTemplateFragment$key | null;
  hideCover?: boolean;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, subheader, contextA, contextB, contextC, metaA, metaB } =
    slots ?? {};

  const renderMeta =
    metaA?.valid || metaB?.valid || contextB?.valid || contextC?.valid;

  if (!(entity?.__typename === "Item" || entity?.__typename === "Collection"))
    return null;

  const href = `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`;

  return (
    <li>
      <NamedLink className={styles.link} href={href}>
        <CoverImage {...entity} maxWidth={168} maxHeight={248} />
        <div className={styles.text}>
          {contextA?.valid && !!contextA.content && (
            <span className={styles.contextOne}>
              <InlineSlotWrapper content={contextA.content} />
            </span>
          )}
          {header?.valid && !!header.content && (
            <h4 className={styles.header}>
              <span className="has-focus-styles">
                <InlineSlotWrapper content={header.content} />
              </span>
            </h4>
          )}
          {subheader?.valid && !!subheader.content && (
            <span className={classNames(styles.subheader, "has-focus-styles")}>
              <InlineSlotWrapper content={subheader.content} />
            </span>
          )}
          <span className={styles.contributors}>
            <ContributorsList data={entity?.contributions} noLinks />
          </span>
          {renderMeta && (
            <div className={styles.group}>
              {metaA?.valid && !!metaA.content && (
                <InlineSlotWrapper content={metaA.content} />
              )}
              {metaB?.valid && <InlineSlotWrapper content={metaB.content} />}
              {contextB?.valid && !!contextB.content && (
                <InlineSlotWrapper content={contextB.content} />
              )}
              {contextC?.valid && !!contextC.content && (
                <InlineSlotWrapper content={contextC.content} />
              )}
            </div>
          )}
        </div>
      </NamedLink>
    </li>
  );
}
