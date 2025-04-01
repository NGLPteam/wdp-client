import { GetLayout } from "@wdp/lib/types/page";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import ItemSlugRedirect from "components/composed/item/ItemSlugRedirect";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingPage } from "components/atomic";
import { AuthContextProvider } from "contexts/AuthContext";
import ItemLayout from "components/composed/item/ItemLayout";
import { SlugItemsPageQuery as Query } from "@/relay/SlugItemsPageQuery.graphql";

function ItemSlug({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return (
    item && (
      <AuthContextProvider data={item}>
        <ItemLayout data={item}>
          <ItemSlugRedirect data={item} />
        </ItemLayout>
      </AuthContextProvider>
    )
  );
}

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const itemSlug = useRouteSlug();
  if (!itemSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{
        ...queryVars,
        ...searchQueryVars,
        itemSlug,
      }}
      loadingFallback={<LoadingPage />}
    >
      {({ queryRef }) =>
        queryRef ? (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        ) : (
          <ItemLayout>
            <ItemSlugRedirect />
          </ItemLayout>
        )
      }
    </QueryTransitionWrapper>
  );
};

ItemSlug.getLayout = getLayout;

export default ItemSlug;

const query = graphql`
  query SlugItemsPageQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...ItemSlugRedirectFragment
      ...AuthContextFragment
    }
  }
`;
