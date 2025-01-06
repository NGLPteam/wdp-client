import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import { useSharedBlockFragment } from "@/components/templates/shared/shared.slots.graphql";
import { DetailSidebarFragment$key } from "@/relay/DetailSidebarFragment.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import DOI from "@/components/atomic/properties/DOI";
import ISSN from "@/components/atomic/properties/ISSN";
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

  const { showDOI, showISSN, showBasicViewMetrics } = definition ?? {};

  const shouldRender =
    showDOI || showISSN || showBasicViewMetrics || slot?.valid;

  return shouldRender ? (
    <div className={styles.right}>
      <ul className={classNames("t-label-sm", styles.sidebar)}>
        {showDOI && <DOI data={entity} />}
        {showISSN && <ISSN data={entity} />}
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
      ...DOIFragment
      ...ISSNFragment
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
      showDOI
      showISSN
      showBasicViewMetrics
    }
    slots {
      sidebar {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
