import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import ItemUpdateForm from "components/composed/item/ItemUpdateForm";
import { LoadingPage } from "components/atomic";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { AuthContextProvider } from "contexts/AuthContext";
import ItemLayout from "components/composed/item/ItemLayout";
import ItemSlugRedirect from "components/composed/item/ItemSlugRedirect";
import type { detailsManageSlugItemsQuery as Query } from "@/relay/detailsManageSlugItemsQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageDetails({ queryRef, ...layoutProps }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <AuthContextProvider data={item}>
      <ItemLayout data={item} {...layoutProps}>
        <ItemUpdateForm data={item} />
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
      loadingFallback={<LoadingPage />}
      refetchTags={["schema", "parent"]}
    >
      {({ queryRef }) =>
        queryRef ? (
          <PageComponent
            {...pageComponentProps}
            queryRef={queryRef}
            showSidebar
            useRouteHeader={false}
          />
        ) : (
          <ItemLayout showSidebar useRouteHeader={false}>
            <ItemSlugRedirect />
          </ItemLayout>
        )
      }
    </QueryTransitionWrapper>
  );
};

ManageDetails.getLayout = getLayout;

export default ManageDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query detailsManageSlugItemsQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...ItemUpdateFormFragment
      ...AuthContextFragment
    }
  }
`;
