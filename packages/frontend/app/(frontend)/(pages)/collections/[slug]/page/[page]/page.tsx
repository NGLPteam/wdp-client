import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityPageLayoutFactory from "components/factories/EntityPageLayoutFactory";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import AppLayout from "components/global/AppLayout";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageCollectionPageQuery as Query } from "@/relay/pageCollectionPageQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CollectionPage({ params }: BasePageParams) {
  const { slug, page: pageSlug } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
    pageSlug,
  });

  const { collection } = data ?? {};

  if (!collection) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <AppLayout communityData={collection.community} entityData={collection}>
        <EntityLayoutFactory data={collection}>
          <EntityPageLayoutFactory data={collection} />
        </EntityLayoutFactory>
      </AppLayout>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageCollectionPageQuery($slug: Slug!, $pageSlug: String!) {
    collection(slug: $slug) {
      ...EntityPageLayoutFactoryFragment
      ...AppLayoutEntityFragment
      ...EntityLayoutFactoryFragment
      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
