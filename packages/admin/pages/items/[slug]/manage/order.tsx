import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import EntityOrderingList from "components/composed/ordering/EntityOrderingList";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { AuthContextProvider } from "contexts/AuthContext";
import { LoadingCircle } from "components/atomic";
import ItemLayout from "components/composed/item/ItemLayout";
import type { ordersManageSlugItemsQuery as Query } from "@/relay/ordersManageSlugItemsQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageOrder({ queryRef, ...layoutProps }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <AuthContextProvider data={item}>
      <ItemLayout data={item} {...layoutProps}>
        <EntityOrderingList data={item} headerStyle="secondary" />;
      </ItemLayout>
    </AuthContextProvider>
  ) : null;
}

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
      loadingFallback={<LoadingCircle />}
      refetchTags={["orderings"]}
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent
            {...pageComponentProps}
            queryRef={queryRef}
            showSidebar
            useRouteHeader={false}
          />
        )
      }
    </QueryTransitionWrapper>
  );
};

ManageOrder.getLayout = getLayout;

export default ManageOrder;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query ordersManageSlugItemsQuery($itemSlug: Slug!, $page: Int!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...EntityOrderingListFragment
      ...AuthContextFragment
    }
  }
`;
