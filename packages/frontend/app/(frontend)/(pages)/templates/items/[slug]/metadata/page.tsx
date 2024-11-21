import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesItemMetadataQuery as Query } from "@/relay/pageTemplatesItemMetadataQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import MetadataTemplate from "@/components/templates/Metadata";

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

  const { template } = metadata ?? {};

  return template ? (
    <UpdateClientEnvironment records={records}>
      <MetadataTemplate data={template} />
    </UpdateClientEnvironment>
  ) : null;
}

const query = graphql`
  query pageTemplatesItemMetadataQuery($slug: Slug!) {
    item(slug: $slug) {
      layouts {
        metadata {
          template {
            ...MetadataTemplateFragment
          }
        }
      }
    }
  }
`;
