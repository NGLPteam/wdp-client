import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import type { HeroImageLayout } from "@/types/graphql-schema";
import {
  useSharedBlockFragment,
  useSharedInlineFragment,
} from "@/components/templates/shared/shared.slots.graphql";
import { HeaderTitleBlockFragment$key } from "@/relay/HeaderTitleBlockFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import CoverImage from "@/components/atomic/images/CoverImage";
import styles from "./Header.module.css";

type TitleBlockProps = {
  data?: HeaderTitleBlockFragment$key | null;
  layout?: HeroImageLayout;
};

export default function TitleBlock({ data, layout }: TitleBlockProps) {
  const template = useFragment(fragment, data);

  const { slots, entity, definition } = template ?? {};

  const header = useSharedInlineFragment(slots?.header);
  const headerSubtitle = useSharedInlineFragment(slots?.headerSubtitle);
  const headerAside = useSharedInlineFragment(slots?.headerAside);
  const headerSummary = useSharedBlockFragment(slots?.headerSummary);
  // const headerParent = useSharedInlineFragment(slots?.headerParent);
  const cta = useSharedBlockFragment(slots?.callToAction);
  const headerParent = {
    valid: false,
    content: "Introduction to Philosophy",
  };

  //@ts-expect-error doesn't exist yet
  const { listContributors, hideSummary = false, showThumbnailImage } =
    definition ?? {};

  return (
    <div className={styles.left}>
      {showThumbnailImage && (
        <span className={styles.thumbColumn}>
          <CoverImage
            id={entity?.id ?? ""}
            title={entity?.title ?? ""}
            data={entity?.thumbnail}
            maxWidth={225}
            maxHeight={300}
          />
        </span>
      )}
      <div className={styles.textColumn}>
        {headerParent?.valid && !!headerParent.content && (
          <span className={layout ? "" : "t-h3"}>
            <InlineSlotWrapper content={headerParent.content} />
          </span>
        )}
        {header?.valid && !!header.content && (
          <h1 className={layout ? "" : `t-h2 ${styles.title}`}>
            <InlineSlotWrapper content={header.content} />
          </h1>
        )}
        {!!headerAside?.content && headerAside.valid && (
          <span
            className={classNames(styles.aside, {
              [styles["aside--in-columns"]]: !!layout,
            })}
          >
            <InlineSlotWrapper content={headerAside.content} />
          </span>
        )}
        {!!headerSubtitle?.content && headerSubtitle.valid && (
          <span className={styles.subtitle}>
            <InlineSlotWrapper content={""} />
          </span>
        )}
        {hideSummary && !!headerSummary?.content && headerSummary.valid && (
          <p className="t-h3">
            <InlineSlotWrapper content={headerSummary.content} />
          </p>
        )}
        <div className={styles.contributors}>
          {listContributors && (
            <ContributorsList
              className="t-copy-medium"
              data={entity}
              collectionSlug={entity?.slug}
              filterRole="author"
            />
          )}
        </div>
        {cta?.valid && !!cta?.content && (
          <BlockSlotWrapper content={cta.content} assetAsButton />
        )}
      </div>
    </div>
  );
}

const fragment = graphql`
  fragment HeaderTitleBlockFragment on HeroTemplateInstance {
    entity {
      ... on Community {
        ...ContributorsListFragment
      }
      ... on Item {
        ...ContributorsListFragment
      }
      ... on Collection {
        id
        slug
        title
        ...ContributorsListFragment
        thumbnail {
          storage
          medium {
            webp {
              width
              height
            }
          }
          ...CoverImageFragment
        }
      }
    }
    definition {
      listContributors
      showThumbnailImage
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
      headerSubtitle {
        ...sharedInlineSlotFragment
      }
      headerAside {
        ...sharedInlineSlotFragment
      }
      headerSummary {
        ...sharedBlockSlotFragment
      }
      callToAction {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
