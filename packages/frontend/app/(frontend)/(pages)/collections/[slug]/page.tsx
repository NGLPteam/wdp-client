import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import JournalContent from "components/composed/journal/JournalContent";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageCollectionQuery as Query } from "@/relay/pageCollectionQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CollectionPage({ params }: BasePageParams) {
  const { slug } = params;

  const { data, records } =
    (await fetchQuery<Query>(query, {
      slug,
    })) ?? {};

  const { collection } = data ?? {};

  if (!collection) return notFound();

  const pageComponent = () => {
    switch (collection?.schemaDefinition?.identifier) {
      case "journal":
        return <JournalContent data={collection} />;

      // By default, return the entity's layout and show ordering content
      default:
        return (
          <Suspense fallback={<LoadingBlock />}>
            <EntityOrderingLayoutFactory data={collection} params={params} />
          </Suspense>
        );
    }
  };

  return (
    <UpdateClientEnvironment records={records}>
      {pageComponent()}
    </UpdateClientEnvironment>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query pageCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      schemaDefinition {
        identifier
      }

      ...EntityOrderingLayoutFactoryFragment
      ...JournalContentFragment
    }
  }
`;
