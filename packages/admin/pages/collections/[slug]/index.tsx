import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import CollectionSlugRedirect from "components/composed/collection/CollectionSlugRedirect";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import { SlugCollectionsPageQuery as Query } from "@/relay/SlugCollectionsPageQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionSlug({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection && <CollectionSlugRedirect data={collection} />;
}

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const collectionSlug = useRouteSlug();
  if (!collectionSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{
        ...queryVars,
        ...searchQueryVars,
        collectionSlug,
      }}
      loadingFallback={<LoadingCircle />}
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        )
      }
    </QueryTransitionWrapper>
  );
};

CollectionSlug.getLayout = getLayout;

export default CollectionSlug;

const query = graphql`
  query SlugCollectionsPageQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...CollectionSlugRedirectFragment
    }
  }
`;
