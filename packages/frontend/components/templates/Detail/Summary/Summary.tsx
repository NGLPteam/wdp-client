import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import {
  useSharedInlineFragment,
  useSharedBlockFragment,
} from "@/components/templates/shared/shared.slots.graphql";
import Container from "@/components/layout/Container";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import { SummaryDetailFragment$key } from "@/relay/SummaryDetailFragment.graphql";
import { ProcessingMessage } from "@/components/templates/ProcessingCheck";
import type { HeroBackground } from "@/types/graphql-schema";
import Announcements from "./Announcements";
import styles from "./Summary.module.css";

export default function Summary({
  data,
  bgColor,
}: {
  data?: SummaryDetailFragment$key | null;
  bgColor?: HeroBackground | null;
}) {
  const template = useFragment(fragment, data);

  const { entity, slots, detailDefinition } = template ?? {};

  const header = useSharedInlineFragment(slots?.header);
  const subheader = useSharedInlineFragment(slots?.subheader);
  const summary = useSharedBlockFragment(slots?.summary);

  const showNoContent =
    !detailDefinition?.showAnnouncements &&
    (!header || header?.empty) &&
    (!subheader || subheader?.empty) &&
    (!summary || summary?.empty);

  if (entity?.__typename === "%other") return null;

  return (
    <Container width="wide" bgColor={bgColor}>
      {showNoContent ? (
        <div className={styles.noContent}>
          <ProcessingMessage entityType={entity?.__typename.toLowerCase()} />
        </div>
      ) : (
        <>
          <div className={styles.grid}>
            <div className={classNames("t-rte", styles.content)}>
              {header?.valid && !!header.content && (
                <h3>
                  <InlineSlotWrapper content={header.content} />
                </h3>
              )}
              {subheader?.valid && !!subheader.content && (
                <h4>
                  <InlineSlotWrapper content={subheader.content} />
                </h4>
              )}
              {summary?.valid && !!summary.content && (
                <BlockSlotWrapper content={summary.content} />
              )}
            </div>
            {detailDefinition?.showAnnouncements && !!entity?.announcements && (
              <div className={styles.announcements}>
                <Announcements data={entity.announcements} />
              </div>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

const fragment = graphql`
  fragment SummaryDetailFragment on DetailTemplateInstance {
    entity {
      ... on Collection {
        __typename
        announcements {
          ...AnnouncementsFragment
          ... on AnnouncementConnection {
            nodes {
              slug
            }
          }
        }
      }
      ... on Community {
        __typename
        announcements {
          ...AnnouncementsFragment
          ... on AnnouncementConnection {
            nodes {
              slug
            }
          }
        }
      }
      ... on Item {
        __typename
        announcements {
          ...AnnouncementsFragment
          ... on AnnouncementConnection {
            nodes {
              slug
            }
          }
        }
      }
    }
    detailDefinition: definition {
      showAnnouncements
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
      subheader {
        ...sharedInlineSlotFragment
      }
      summary {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
