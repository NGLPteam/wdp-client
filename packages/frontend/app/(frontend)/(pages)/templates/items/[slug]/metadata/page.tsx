import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityMetadataFactory from "@/components/factories/EntityMetadataFactory";
import EntityMetadataBlock from "@/components/composed/entity/EntityMetadataBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesItemMetadataQuery as Query } from "@/relay/pageTemplatesItemMetadataQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function ItemPage({ params }: BasePageParams) {
  const { slug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
  });

  const { item } = data ?? {};

  if (!item) return notFound();

  const {
    layouts: { metadata },
  } = item;

  const { template, entity } = metadata ?? {};

  return entity ? (
    <UpdateClientEnvironment records={records}>
      <EntityMetadataBlock data={template}>
        <EntityMetadataFactory data={entity} />
      </EntityMetadataBlock>
    </UpdateClientEnvironment>
  ) : null;
}

const query = graphql`
  query pageTemplatesItemMetadataQuery($slug: Slug!) {
    item(slug: $slug) {
      layouts {
        metadata {
          entity {
            ...EntityMetadataFactoryFragment
          }
          template {
            ...EntityMetadataBlockFragment
          }
        }
      }
    }
  }
`;
