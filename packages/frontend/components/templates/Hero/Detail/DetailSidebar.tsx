import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import { useSharedBlockFragment } from "@/components/templates/shared/shared.slots.graphql";
import { DetailSidebarFragment$key } from "@/relay/DetailSidebarFragment.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import DownloadCount from "@/components/atomic/properties/DownloadCount";
import ViewCount from "@/components/atomic/properties/ViewCount";
import styles from "./Detail.module.css";

export default function Sidebar({
  data,
}: {
  data?: DetailSidebarFragment$key | null;
}) {
  const template = useFragment(fragment, data);

  const { entity, definition, slots } = template ?? {};

  const slot = useSharedBlockFragment(slots?.sidebar);

  const { showBasicViewMetrics } = definition ?? {};

  const shouldRender = showBasicViewMetrics || slot?.valid;

  return shouldRender ? (
    <div className={styles.right}>
      <ul className={classNames("t-label-sm", styles.sidebar)}>
        {slot?.valid && !!slot.content && (
          <BlockSlotWrapper content={slot.content} />
        )}
        {showBasicViewMetrics && (
          <>
            <ViewCount data={entity?.entityViews} />
            <DownloadCount data={entity?.assetDownloads} />
          </>
        )}
      </ul>
    </div>
  ) : null;
}

const fragment = graphql`
  fragment DetailSidebarFragment on HeroTemplateInstance {
    entity {
      ... on Item {
        entityViews {
          ...ViewCountFragment
        }
        assetDownloads {
          ...DownloadCountFragment
        }
      }
      ... on Collection {
        entityViews {
          ...ViewCountFragment
        }
        assetDownloads {
          ...DownloadCountFragment
        }
      }
    }
    definition {
      showBasicViewMetrics
    }
    slots {
      sidebar {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
