import { graphql, useFragment } from "react-relay";
import { useSharedBlockFragment } from "@/components/templates/shared.graphql";
import { HeaderSidebarHeroFragment$key } from "@/relay/HeaderSidebarHeroFragment.graphql";
import { HeaderSidebarHeroLayoutFragment$key } from "@/relay/HeaderSidebarHeroLayoutFragment.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import DOI from "@/components/atomic/properties/DOI";
import ISSN from "@/components/atomic/properties/ISSN";
import DownloadCount from "@/components/atomic/properties/DownloadCount";
import ViewCount from "@/components/atomic/properties/ViewCount";
import * as Styled from "./Header.styles";

export default function Sidebar({
  data,
  entityData,
}: {
  data?: HeaderSidebarHeroLayoutFragment$key | null;
  entityData?: HeaderSidebarHeroFragment$key | null;
}) {
  const template = useFragment(layoutFragment, data);
  const entity = useFragment(fragment, entityData);

  const { definition, slots } = template ?? {};

  const slot = useSharedBlockFragment(slots?.headerSidebar);

  const { showDOI, showISSN, showBasicViewMetrics } = definition ?? {};

  const shouldRender =
    showDOI || showISSN || showBasicViewMetrics || slot?.valid || true;

  return shouldRender ? (
    <Styled.Right>
      <Styled.SidebarWrapper>
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
      </Styled.SidebarWrapper>
    </Styled.Right>
  ) : null;
}

const fragment = graphql`
  fragment HeaderSidebarHeroFragment on AnyEntity {
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
  fragment HeaderSidebarHeroLayoutFragment on HeroTemplateInstance {
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
