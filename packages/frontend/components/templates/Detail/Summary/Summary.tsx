import { graphql, useFragment } from "react-relay";
import {
  useSharedInlineFragment,
  useSharedBlockFragment,
} from "@/components/templates/shared.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import EntityAnnouncements from "@/components/composed/entity/EntityAnnouncements";
import { SummaryDetailFragment$key } from "@/relay/SummaryDetailFragment.graphql";
import { SummaryDetailEntityFragment$key } from "@/relay/SummaryDetailEntityFragment.graphql";
import * as Styled from "./Summary.styles";

export default function Summary({
  data,
  entityData,
  showAnnouncements,
}: {
  data?: SummaryDetailFragment$key | null;
  entityData?: SummaryDetailEntityFragment$key | null;
  showAnnouncements?: boolean | null;
}) {
  const entity = useFragment(entityFragment, entityData);
  const slots = useFragment(fragment, data);
  const header = useSharedInlineFragment(slots?.header);
  const subheader = useSharedInlineFragment(slots?.subheader);
  const summary = useSharedBlockFragment(slots?.summary);

  return (
    <Styled.Grid>
      <Styled.Content className="t-rte">
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
          <p>
            <BlockSlotWrapper content={summary.content} />
          </p>
        )}
      </Styled.Content>
      {showAnnouncements && !!entity?.announcements && (
        <Styled.Announcements>
          <EntityAnnouncements data={entity.announcements} />
        </Styled.Announcements>
      )}
    </Styled.Grid>
  );
}

const fragment = graphql`
  fragment SummaryDetailFragment on DetailTemplateInstanceSlots {
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
`;

const entityFragment = graphql`
  fragment SummaryDetailEntityFragment on AnyEntity {
    ... on Collection {
      announcements {
        ...EntityAnnouncementsFragment
        ... on AnnouncementConnection {
          nodes {
            slug
          }
        }
      }
    }
    ... on Community {
      announcements {
        ...EntityAnnouncementsFragment
        ... on AnnouncementConnection {
          nodes {
            slug
          }
        }
      }
    }
    ... on Item {
      announcements {
        ...EntityAnnouncementsFragment
        ... on AnnouncementConnection {
          nodes {
            slug
          }
        }
      }
    }
  }
`;
