import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useDescendantListQueryVars } from "hooks";
import EntityDescendantsLayout from "components/composed/entity/EntityDescendantsLayout";
import { SchemaCommunityCollectionsQuery as Query } from "@/relay/SchemaCommunityCollectionsQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";

export default function CommunityCollectionsSchema() {
  const queryVars = useDescendantListQueryVars();

  return (
    <QueryWrapper<Query> query={query} initialVariables={queryVars}>
      {({ data }) => (
        <CommunityLayoutQuery data={data}>
          {data?.community?.orderingForSchema ? (
            <EntityOrderingLayoutFactory
              data={data.community}
              ordering={data.community.orderingForSchema.identifier}
            />
          ) : (
            <EntityDescendantsLayout data={data?.community?.descendants} />
          )}
        </CommunityLayoutQuery>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query SchemaCommunityCollectionsQuery(
    $slug: Slug!
    $schema: String!
    $schemaSlug: Slug!
    $page: Int
    $order: EntityDescendantOrder!
  ) {
    # query for schema
    community(slug: $slug) {
      orderingForSchema(slug: $schemaSlug) {
        identifier
      }
      descendants(
        scope: COLLECTION
        order: $order
        schema: [$schema]
        page: $page
      ) {
        ...EntityDescendantsLayoutFragment
      }
      ...EntityOrderingLayoutFactoryFragment
      # orderingForSchema($schema) {
      #    ...EntityOrderingsFragment
      # }
    }
    ...CommunityLayoutQueryFragment @arguments(slug: $slug)
  }
`;
