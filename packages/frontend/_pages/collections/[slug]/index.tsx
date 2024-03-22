import React from "react";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import JournalContent from "components/composed/journal/JournalContent";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import {
  getStaticGlobalContextData,
  getStaticEntityData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import AppLayout from "components/global/AppLayout";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { LoadingBlock } from "components/atomic";
import ErrorPage from "next/error";
import { SlugCollectionQuery } from "@/relay/SlugCollectionQuery.graphql";

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getStaticGlobalContextData();
  const entityData = await getStaticEntityData(context);

  return {
    props: { ...props, entityData },
    revalidate: STATIC_PROPS_REVALIDATE,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function SlugCollection({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<SlugCollectionQuery>(
    query,
    queryRef,
  );

  const pageComponent = () => {
    switch (collection?.schemaDefinition?.identifier) {
      case "journal":
        return <JournalContent data={collection} />;

      // By default, return the entity's layout and show ordering content
      default:
        return <EntityOrderingLayoutFactory data={collection} />;
    }
  };

  return collection ? (
    <AppLayout communityData={collection.community} entityData={collection}>
      <EntityLayoutFactory data={collection}>
        {pageComponent()}
      </EntityLayoutFactory>
    </AppLayout>
  ) : null;
}

/* eslint-disable react-hooks/rules-of-hooks */
const getLayout: GetLayout<Props> = (props) => {
  const slug = useRouteSlug();

  if (!slug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryLoaderWrapper<SlugCollectionQuery>
      query={query}
      variables={{ slug }}
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
  queryRef: PreloadedQuery<SlugCollectionQuery>;
};

SlugCollection.getLayout = getLayout;

export const query = graphql`
  query SlugCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      schemaDefinition {
        identifier
      }

      ...EntityOrderingLayoutFactoryFragment
      ...JournalContentFragment
      ...AppLayoutEntityFragment
      ...EntityLayoutFactoryFragment

      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
