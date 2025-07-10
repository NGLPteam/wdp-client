import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import ContributorDetail from "components/composed/contributor/ContributorDetail";
import ContributorDetailNav from "components/composed/contributor/ContributorDetailNav";
import fetchQuery from "@/lib/relay/fetchQuery";
import { BasePageParams } from "@/types/page";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { pageContributorDetailQuery as DetailQuery } from "@/relay/pageContributorDetailQuery.graphql";
import { pageContributorItemDetailQuery as ItemQuery } from "@/relay/pageContributorItemDetailQuery.graphql";
import { pageContributorCollectionLayoutQuery as CollectionQuery } from "@/relay/pageContributorCollectionLayoutQuery.graphql";
import SetCommunity from "@/components/global/SetCommunity";

export async function generateStaticParams() {
  return [];
}

export default async function ContributorPage({
  params,
  searchParams,
}: BasePageParams & { searchParams: Record<string, string> }) {
  const { slug } = params;
  const {
    item: itemSlug,
    collection: collectionSlug,
    page = "1",
  } = searchParams ?? {};

  const query = itemSlug
    ? itemQuery
    : collectionSlug
      ? collectionQuery
      : detailQuery;

  const { data, records } = await fetchQuery<
    DetailQuery | ItemQuery | CollectionQuery
  >(query, {
    slug,
    item: itemSlug,
    collection: collectionSlug,
    page: parseInt(page),
  });

  const contributor = data?.contributor;

  if (!data || !contributor) return notFound();

  const item = "item" in data && data?.item;
  const collection = "collection" in data && data?.collection;

  const community = item
    ? item.community
    : collection
      ? collection.community
      : undefined;

  return (
    <UpdateClientEnvironment records={records}>
      <SetCommunity data={community}>
        {item && <ContributorDetailNav data={item} />}
        {collection && <ContributorDetailNav data={collection} />}
        <ContributorDetail data={contributor} />
      </SetCommunity>
    </UpdateClientEnvironment>
  );
}

const detailQuery = graphql`
  query pageContributorDetailQuery($slug: Slug!, $page: Int) {
    contributor(slug: $slug) {
      ...ContributorDetailFragment
    }
  }
`;

const itemQuery = graphql`
  query pageContributorItemDetailQuery($slug: Slug!, $item: Slug!, $page: Int) {
    contributor(slug: $slug) {
      ...ContributorDetailFragment
    }

    item(slug: $item) {
      ...ContributorDetailNavFragment

      community {
        ...SetCommunityFragment
      }
    }
  }
`;

const collectionQuery = graphql`
  query pageContributorCollectionLayoutQuery(
    $slug: Slug!
    $collection: Slug!
    $page: Int
  ) {
    contributor(slug: $slug) {
      ...ContributorDetailFragment
    }

    collection(slug: $collection) {
      ...ContributorDetailNavFragment

      community {
        ...SetCommunityFragment
      }
    }
  }
`;
