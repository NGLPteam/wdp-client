import { graphql, useFragment } from "react-relay";
import { useSharedBlockFragment } from "@/components/templates/shared.graphql";
import { DetailSidebarFragment$key } from "@/relay/DetailSidebarFragment.graphql";
import { DetailSidebarLayoutFragment$key } from "@/relay/DetailSidebarLayoutFragment.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import DOI from "@/components/atomic/properties/DOI";
import ISSN from "@/components/atomic/properties/ISSN";
import DownloadCount from "@/components/atomic/properties/DownloadCount";
import ViewCount from "@/components/atomic/properties/ViewCount";
import * as Styled from "./Detail.styles";

export default function Sidebar({
  data,
  entityData,
}: {
  data?: DetailSidebarLayoutFragment$key | null;
  entityData?: DetailSidebarFragment$key | null;
}) {
  const template = useFragment(layoutFragment, data);
  const entity = useFragment(fragment, entityData);

  const { definition, slots } = template ?? {};

  const slot = useSharedBlockFragment(slots?.headerSidebar);

  const { showDOI, showISSN, showBasicViewMetrics } = definition ?? {};

  const shouldRender =
    showDOI || showISSN || showBasicViewMetrics || slot?.valid || true;

  return shouldRender ? (
    <Styled.Sidebar>
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
    </Styled.Sidebar>
  ) : null;
}

const fragment = graphql`
  fragment DetailSidebarFragment on AnyEntity {
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
  }
`;

const layoutFragment = graphql`
  fragment DetailSidebarLayoutFragment on HeroTemplateInstance {
    definition {
      showDOI
      showISSN
      showBasicViewMetrics
    }
    slots {
      headerSidebar {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
