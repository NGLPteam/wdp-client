import { graphql } from "relay-runtime";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import EntityDescendantsLayout from "components/composed/entity/EntityDescendantsLayout";
import { SchemaCommunityItemsQuery as Query } from "@/relay/SchemaCommunityItemsQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import { useDescendantListQueryVars } from "hooks";
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

export default function CommunityItemsSchema({ data }: Props) {
  return data?.community?.orderingForSchema ? (
    <EntityOrderingLayoutFactory
      data={data.community}
      ordering={data.community.orderingForSchema.identifier}
    />
  ) : (
    <EntityDescendantsLayout data={data?.community?.descendants} />
  );
}

const GetItemsLayout: GetLayout<Props> = (props) => {
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

CommunityItemsSchema.getLayout = GetItemsLayout;

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
