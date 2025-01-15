import { useRef } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { BackToTopBlock } from "components/layout";
import ContentImage from "@/components/atomic/images/ContentImage";
import { FullDetailFragment$key } from "@/relay/FullDetailFragment.graphql";
import { useSharedBlockFragment } from "@/components/templates/shared/shared.slots.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import TOC from "./TOC";
import styles from "./Full.module.css";

export default function FullVariant({
  data,
  showHeroImage,
}: {
  data?: FullDetailFragment$key | null;
  showHeroImage?: boolean | null;
}) {
  const template = useFragment(fragment, data);

  const { entity, slots } = template ?? {};

  const body = useSharedBlockFragment(slots?.body);

  const textEl = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  const isPDF = body?.content?.startsWith("<PDFViewer");

  return isPDF ? (
    <div className={styles.outer}>
      {body?.valid && !!body.content ? (
        <BlockSlotWrapper content={body.content} />
      ) : (
        t("common.no_content")
      )}
    </div>
  ) : (
    <BackToTopBlock className={styles.outer}>
      <div className={styles.inner}>
        <TOC textRef={textEl} />
        <div className={styles.text} ref={textEl}>
          {showHeroImage && entity?.thumbnail?.storage && (
            <div className={styles.image}>
              <ContentImage data={entity.thumbnail} />
            </div>
          )}
          {body?.valid && !!body.content ? (
            <div className="t-rte">
              <BlockSlotWrapper content={body.content} />
            </div>
          ) : (
            t("common.no_content")
          )}
        </div>
      </div>
    </BackToTopBlock>
  );
}

const fragment = graphql`
  fragment FullDetailFragment on DetailTemplateInstance {
    entity {
      ... on Item {
        thumbnail {
          storage
          ...ContentImageFragment
        }
      }
      ... on Collection {
        thumbnail {
          storage
          ...ContentImageFragment
        }
      }
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
      subheader {
        ...sharedInlineSlotFragment
      }
      body {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
