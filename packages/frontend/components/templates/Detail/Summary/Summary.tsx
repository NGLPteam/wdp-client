import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import {
  useSharedInlineFragment,
  useSharedBlockFragment,
} from "@/components/templates/shared/shared.slots.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import { SummaryDetailFragment$key } from "@/relay/SummaryDetailFragment.graphql";
import NoContent from "@/components/layout/messages/NoContent";
import Announcements from "./Announcements";
import styles from "./Summary.module.css";

export default function Summary({
  data,
  showAnnouncements,
}: {
  data?: SummaryDetailFragment$key | null;
  showAnnouncements?: boolean | null;
}) {
  const template = useFragment(fragment, data);

  const { entity, slots } = template ?? {};

  const header = useSharedInlineFragment(slots?.header);
  const subheader = useSharedInlineFragment(slots?.subheader);
  const summary = useSharedBlockFragment(slots?.summary);

  const showNoContent =
    !showAnnouncements &&
    (!header || header?.empty) &&
    (!subheader || subheader?.empty) &&
    (!summary || summary?.empty);

  return showNoContent ? (
    <div className={styles.noContent}>
      <NoContent />
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
        {showAnnouncements && !!entity?.announcements && (
          <div className={styles.announcements}>
            <Announcements data={entity.announcements} />
          </div>
        )}
      </div>
    </>
  );
}

const fragment = graphql`
  fragment SummaryDetailFragment on DetailTemplateInstance {
    entity {
      ... on Collection {
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
