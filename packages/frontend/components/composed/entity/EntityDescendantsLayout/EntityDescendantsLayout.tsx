import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import EntityDescendantOrderSelect from "../EntityDescendantOrderSelect";
import EntitySummaryFactory from "components/factories/EntitySummaryFactory";
import {
  EntityDescendantsLayoutFragment$data,
  EntityDescendantsLayoutFragment$key,
} from "@/relay/EntityDescendantsLayoutFragment.graphql";
import { useDescendantListQueryVars } from "hooks";
import { getSchemaTranslationKey } from "helpers";
import BrowseListLayout from "components/layout/BrowseListLayout";

export default function EntityDescendantsLayout({ data }: Props) {
  const decendants = useMaybeFragment(fragment, data);

  const { schema } = useDescendantListQueryVars();

  const pageInfo = useMemo(() => decendants?.pageInfo, [decendants]);

  const { t } = useTranslation();

  return decendants ? (
    <BrowseListLayout
      data={pageInfo}
      header={t(getSchemaTranslationKey(schema), { count: 2 })}
      orderComponent={<EntityDescendantOrderSelect />}
      items={decendants.edges.map(({ node: { descendant } }: Node) => (
        <EntitySummaryFactory key={descendant.slug} data={descendant} />
      ))}
    />
  ) : null;
}

interface Props {
  data?: EntityDescendantsLayoutFragment$key | null;
}

type Node = EntityDescendantsLayoutFragment$data["edges"][number];

const fragment = graphql`
  fragment EntityDescendantsLayoutFragment on EntityDescendantConnection {
    edges {
      node {
        descendant {
          ... on Sluggable {
            slug
          }
          ... on Entity {
            ...EntitySummaryFactoryFragment @arguments(showJournal: true)
          }
        }
      }
    }
    pageInfo {
      ...BrowseListLayoutFragment
    }
  }
`;
