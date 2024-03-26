import { graphql, readInlineData } from "relay-runtime";
import EntityAnnouncementLayout from "components/composed/entity/EntityAnnouncementLayout";
import { EntityAnnouncementLayoutFactoryFragment$key } from "@/relay/EntityAnnouncementLayoutFactoryFragment.graphql";

export default function EntityAnnouncementLayoutFactory({ data }: Props) {
  const entity = readInlineData(fragment, data);

  if (!entity) return null;

  return <EntityAnnouncementLayout data={entity.announcement} />;
}

interface Props {
  data: EntityAnnouncementLayoutFactoryFragment$key | null;
}

const fragment = graphql`
  fragment EntityAnnouncementLayoutFactoryFragment on AnyEntity @inline {
    ... on Collection {
      announcement(slug: $announcementSlug) {
        ...EntityAnnouncementLayoutFragment
      }
    }
  }
`;
