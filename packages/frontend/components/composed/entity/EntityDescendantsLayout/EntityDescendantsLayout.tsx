"use client";

import { graphql, readInlineData } from "relay-runtime";
import { getSchemaPluralName } from "helpers/translations";
import BrowseListLayout from "components/layout/BrowseListLayout";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import { useTranslation } from "react-i18next";
import EntitySummary from "@/components/composed/entity/EntitySummary";
import {
  EntityDescendantsLayoutFragment$data,
  EntityDescendantsLayoutFragment$key,
} from "@/relay/EntityDescendantsLayoutFragment.graphql";
import EntityDescendantOrderSelect from "../EntityDescendantOrderSelect";

interface Props {
  data: EntityDescendantsLayoutFragment$key | null;
  schema: string;
}

export default function EntityDescendantsLayout({ data, schema }: Props) {
  const { t } = useTranslation();
  const decendants = readInlineData(fragment, data);
  const schemaName = decendants
    ? decendants.edges?.[0]?.node?.descendant?.schemaDefinition?.name || ""
    : "";

  return decendants ? (
    <BrowseListLayout
      data={decendants.pageInfo}
      header={getSchemaPluralName(schema, schemaName, t)}
      orderComponent={<EntityDescendantOrderSelect />}
      items={decendants.edges.map(({ node: { descendant } }: Node) => (
        <EntitySummary key={descendant.slug} data={descendant} />
      ))}
    />
  ) : (
    <LoadingBlock />
  );
}

type Node = EntityDescendantsLayoutFragment$data["edges"][number];

const fragment = graphql`
  fragment EntityDescendantsLayoutFragment on EntityDescendantConnection
  @inline {
    edges {
      node {
        descendant {
          ... on Sluggable {
            slug
          }
          ... on Entity {
            schemaDefinition {
              identifier
              name
            }
            ...EntitySummaryFragment
          }
        }
      }
    }
    pageInfo {
      ...BrowseListLayoutFragment
    }
  }
`;
