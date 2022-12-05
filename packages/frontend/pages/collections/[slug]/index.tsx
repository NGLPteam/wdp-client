import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetServerSidePropsContext } from "next";
import { SlugCollectionQuery as Query } from "@/relay/SlugCollectionQuery.graphql";
import CollectionLayoutQuery from "components/composed/collections/CollectionLayoutQuery/CollectionLayoutQuery";
import JournalContent from "components/composed/journal/JournalContent";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import { getStaticEntityData } from "contexts/GlobalStaticContext";
import { setCacheDefaults } from "helpers";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const entityData = await getStaticEntityData(context);
  setCacheDefaults(context.res);

  return {
    props: { entityData },
  };
}

export default function SlugCollection({ data }: Props) {
  const collection = data?.collection;

  switch (collection?.schemaDefinition?.identifier) {
    case "journal":
      return <JournalContent data={collection} />;

    // By default, return the entity's layout and show ordering content
    default:
      return <EntityOrderingLayoutFactory data={collection} />;
  }
}

const getLayout: GetLayout<Props> = (props) => {
  return <CollectionLayoutQuery<Query, Props> query={query} {...props} />;
};

type Props = {
  data: Query["response"];
};

SlugCollection.getLayout = getLayout;

const query = graphql`
  query SlugCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      schemaDefinition {
        identifier
      }

      ...EntityOrderingLayoutFactoryFragment
      ...JournalContentFragment
    }

    ...CollectionLayoutQueryFragment @arguments(slug: $slug)
  }
`;
