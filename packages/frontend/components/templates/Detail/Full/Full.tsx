import { useRef } from "react";
import { graphql, useFragment } from "react-relay";
import { BackToTopBlock } from "components/layout";
import ContentImage from "@/components/atomic/images/ContentImage";
import { FullDetailFragment$key } from "@/relay/FullDetailFragment.graphql";
import { useSharedBlockFragment } from "@/components/templates/shared/shared.slots.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import NoContent from "@/components/layout/messages/NoContent";
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

  const isPDF = body?.content?.startsWith("<PDFViewer");

  return isPDF ? (
    <div className={styles.outer}>
      {body?.valid && !!body.content ? (
        <BlockSlotWrapper content={body.content} />
      ) : (
        <NoContent />
      )}
    </div>
  ) : (
    <BackToTopBlock className={styles.outer}>
      <div className={styles.inner}>
        <TOC textRef={textEl} />
        {body?.valid && !!body.content ? (
          <div className={styles.text} ref={textEl}>
            {showHeroImage && entity?.heroImage?.storage && (
              <div className={styles.image}>
                <ContentImage data={entity.heroImage} />
              </div>
            )}
            <div className="t-rte">
              <BlockSlotWrapper content={body.content} />
            </div>
          </div>
        ) : (
          <div className={styles.noContent}>
            <NoContent />
          </div>
        )}
      </div>
    </BackToTopBlock>
  );
}

const fragment = graphql`
  fragment FullDetailFragment on DetailTemplateInstance {
    entity {
      ... on Item {
        heroImage {
          storage
          ...ContentImageFragment
        }
      }
      ... on Collection {
        heroImage {
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
