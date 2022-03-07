import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import EntityLayoutFactory from "../EntityLayoutFactory";
import { EntityAnnouncementLayoutFactoryFragment$key } from "@/relay/EntityAnnouncementLayoutFactoryFragment.graphql";
import EntityAnnouncementLayout from "components/composed/entity/EntityAnnouncementLayout";

export default function EntityAnnouncementLayoutFactory({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  return (
    <EntityLayoutFactory data={entity}>
      <EntityAnnouncementLayout data={entity.announcement} />
    </EntityLayoutFactory>
  );
}

interface Props {
  data?: EntityAnnouncementLayoutFactoryFragment$key | null;
}

const fragment = graphql`
  fragment EntityAnnouncementLayoutFactoryFragment on AnyEntity {
    ... on Collection {
      schemaDefinition {
        identifier
      }

      ...EntityLayoutFactoryFragment

      announcement(slug: $announcementSlug) {
        ...EntityAnnouncementLayoutFragment
      }
    }
  }
`;
