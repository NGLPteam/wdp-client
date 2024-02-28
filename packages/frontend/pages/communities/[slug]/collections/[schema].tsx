import React from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import { useDescendantListQueryVars } from "hooks";
import EntityDescendantsLayout from "components/composed/entity/EntityDescendantsLayout";
import { SchemaCommunityCollectionsQuery as Query } from "@/relay/SchemaCommunityCollectionsQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import {
  getStaticGlobalContextData,
  getStaticEntityData,
} from "contexts/GlobalStaticContext";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { LoadingBlock } from "components/atomic";
import ErrorPage from "next/error";
import AppLayout from "components/global/AppLayout";

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

export default function CommunityCollectionsSchema({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AppLayout communityData={community} entityData={community}>
      {community.orderingForSchema ? (
        <EntityOrderingLayoutFactory
          data={community}
          ordering={community.orderingForSchema.identifier}
        />
      ) : (
        <EntityDescendantsLayout data={community.descendants} />
      )}
    </AppLayout>
  ) : null;
}

const GetCommunityLayout: GetLayout<Props> = (props) => {
  const queryVars = useDescendantListQueryVars();
  const slug = useRouteSlug();

  if (!slug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryLoaderWrapper<Query>
      query={query}
      variables={queryVars}
      loadingFallback={<LoadingBlock />}
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        )
      }
    </QueryLoaderWrapper>
  );
};

type Props = {
  queryRef: PreloadedQuery<Query>;
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
      ...AppLayoutCommunityFragment
      ...AppLayoutEntityFragment
      ...EntityOrderingLayoutFactoryFragment
    }
  }
`;
