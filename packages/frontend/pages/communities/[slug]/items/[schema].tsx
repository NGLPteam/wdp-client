import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useDescendantListQueryVars } from "hooks";
import EntityDescendantsLayout from "components/composed/entity/EntityDescendantsLayout";
import { SchemaCommunityItemsQuery as Query } from "@/relay/SchemaCommunityItemsQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";

export default function CommunityItemsSchema() {
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
  query SchemaCommunityItemsQuery(
    $slug: Slug!
    $schema: String!
    $schemaSlug: Slug!
    $page: Int
    $order: EntityDescendantOrder!
  ) {
    community(slug: $slug) {
      orderingForSchema(slug: $schemaSlug) {
        name
        slug
        identifier
        count
      }
      descendants(scope: ITEM, order: $order, schema: [$schema], page: $page) {
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
