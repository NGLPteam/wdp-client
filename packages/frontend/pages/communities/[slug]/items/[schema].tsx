import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useDescendantListQueryVars } from "hooks";
import AppLayout from "components/global/AppLayout";
import EntityDescendantsLayout from "components/composed/entity/EntityDescendantsLayout";
import { SchemaCommunityItemsQuery as Query } from "@/relay/SchemaCommunityItemsQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";

export default function CommunityItemsSchema() {
  const queryVars = useDescendantListQueryVars();

  return (
    <QueryWrapper<Query> query={query} initialVariables={queryVars}>
      {({ data }) => (
        <AppLayout data={data} communityData={data?.community}>
          {data?.community.orderingForSchema ? (
            <EntityOrderingLayoutFactory
              data={data.community}
              ordering={data.community.orderingForSchema.identifier}
            />
          ) : (
            <EntityDescendantsLayout data={data?.community?.descendants} />
          )}
        </AppLayout>
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
      ...AppLayoutCommunityFragment
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
    ...AppLayoutFragment
  }
`;
