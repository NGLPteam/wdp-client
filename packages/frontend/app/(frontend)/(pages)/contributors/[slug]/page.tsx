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
import AppBody from "@/components/global/AppBody";
import { CommunityContextProvider } from "@/contexts/CommunityContext";

export default async function ContributorPage({
  params,
  searchParams,
}: BasePageParams & { searchParams: Record<string, string> }) {
  const { slug } = params;
  const {
    item: itemSlug,
    collection: collectionSlug,
    page = 1,
  } = searchParams ?? {};

  const query = itemSlug
    ? itemQuery
    : collectionSlug
      ? collectionQuery
      : detailQuery;

  const { data, records } = await fetchQuery<
    DetailQuery | ItemQuery | CollectionQuery
  >(query, { slug, item: itemSlug, collection: collectionSlug, page });

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
      <CommunityContextProvider data={community}>
        <AppBody data={data}>
          {item && <ContributorDetailNav data={item} />}
          {collection && <ContributorDetailNav data={collection} />}
          <ContributorDetail data={contributor} />
        </AppBody>
      </CommunityContextProvider>
    </UpdateClientEnvironment>
  );
}

const detailQuery = graphql`
  query pageContributorDetailQuery($slug: Slug!, $page: Int) {
    contributor(slug: $slug) {
      ...ContributorDetailFragment
    }
    ...AppBodyFragment
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
        ...CommunityContextFragment
      }
    }

    ...AppBodyFragment
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
        ...CommunityContextFragment
      }
    }

    ...AppBodyFragment
  }
`;
