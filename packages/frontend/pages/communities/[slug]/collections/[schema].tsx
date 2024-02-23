import React from "react";
import { graphql } from "relay-runtime";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import { useDescendantListQueryVars } from "hooks";
import EntityDescendantsLayout from "components/composed/entity/EntityDescendantsLayout";
import { SchemaCommunityCollectionsQuery as Query } from "@/relay/SchemaCommunityCollectionsQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import {
  getStaticGlobalContextData,
  getStaticEntityData,
} from "contexts/GlobalStaticContext";

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getStaticGlobalContextData();
  const entityData = await getStaticEntityData(context);

  return {
    props: { ...props, entityData },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function CommunityCollectionsSchema({ data }: Props) {
  return data?.community?.orderingForSchema ? (
    <EntityOrderingLayoutFactory
      data={data.community}
      ordering={data.community.orderingForSchema.identifier}
    />
  ) : (
    <EntityDescendantsLayout data={data?.community?.descendants} />
  );
}

const GetCommunityLayout: GetLayout<Props> = (props) => {
  const queryVars = useDescendantListQueryVars();
  return (
    <CommunityLayoutQuery<Query, Props>
      query={query}
      variables={queryVars}
      {...props}
    />
  );
};

type Props = {
  data: Query["response"];
};

CommunityCollectionsSchema.getLayout = GetCommunityLayout;

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
