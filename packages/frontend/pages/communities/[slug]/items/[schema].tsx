import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useDescendantListQueryVars } from "hooks";
import CommunityLayout from "components/composed/community/CommunityLayout";
import EntityDescendantsLayout from "components/composed/entity/EntityDescendantsLayout";
import { SchemaCommunityItemsQuery as Query } from "@/relay/SchemaCommunityItemsQuery.graphql";

export default function CommunityItemsSchema() {
  const queryVars = useDescendantListQueryVars();

  return (
    <QueryWrapper<Query> query={query} initialVariables={queryVars}>
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.community}>
          <EntityDescendantsLayout data={data?.community?.descendants} />
        </CommunityLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query SchemaCommunityItemsQuery(
    $slug: Slug!
    $schema: String!
    $page: Int
    $order: EntityDescendantOrder!
  ) {
    community(slug: $slug) {
      ...CommunityLayoutFragment
      descendants(scope: ITEM, order: $order, schema: [$schema], page: $page) {
        ...EntityDescendantsLayoutFragment
      }
    }
    ...CommunityLayoutAppFragment
  }
`;
