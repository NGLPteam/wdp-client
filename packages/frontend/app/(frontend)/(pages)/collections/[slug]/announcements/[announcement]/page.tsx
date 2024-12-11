import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import EntityAnnouncementLayout from "components/composed/entity/EntityAnnouncementLayout";
import LoadingBlock from "@/components/atomic/loading/LoadingBlock";
import { BasePageParams } from "@/types/page";
import fetchQuery from "@/lib/relay/fetchQuery";
import { pageTemplatesCollectionAnnouncementQuery as Query } from "@/relay/pageTemplatesCollectionAnnouncementQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";

export default async function CollectionAnnouncementPage({
  params,
}: BasePageParams) {
  const { slug, announcement } = params;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
    announcementSlug: announcement,
  });

  const { collection } = data ?? {};

  if (!collection) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <Suspense fallback={<LoadingBlock />}>
        <EntityAnnouncementLayout data={collection.announcement} />
      </Suspense>
    </UpdateClientEnvironment>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query pageTemplatesCollectionAnnouncementQuery(
    $slug: Slug!
    $announcementSlug: Slug!
  ) {
    collection(slug: $slug) {
      ... on Collection {
        announcement(slug: $announcementSlug) {
          ...EntityAnnouncementLayoutFragment
        }
      }
    }
  }
`;
