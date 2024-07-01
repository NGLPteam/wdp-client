import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import ItemContributionList from "components/composed/contribution/ItemContributionList";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { AuthContextProvider } from "contexts/AuthContext";
import { LoadingPage } from "components/atomic";
import ItemLayout from "components/composed/item/ItemLayout";
import type {
  ContributionOrder,
  contributionsManageSlugItemsQuery as Query,
} from "@/relay/contributionsManageSlugItemsQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageContributions({ queryRef, ...layoutProps }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <AuthContextProvider data={item}>
      <ItemLayout data={item} {...layoutProps}>
        <ItemContributionList
          nameColumn="contributor"
          data={item.contributions}
          headerStyle="secondary"
        />
      </ItemLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const { order, ...queryVars } = useBaseListQueryVars();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { order: searchOrder, ...searchQueryVars } = useSearchQueryVars();

  const itemSlug = useRouteSlug();
  if (!itemSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{
        order: order as ContributionOrder,
        ...queryVars,
        ...searchQueryVars,
        itemSlug,
      }}
      loadingFallback={<LoadingPage />}
      refetchTags={["contributions"]}
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

ManageContributions.getLayout = getLayout;

export default ManageContributions;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query contributionsManageSlugItemsQuery(
    $itemSlug: Slug!
    $page: Int!
    $order: ContributionOrder
  ) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...AuthContextFragment
      contributions(page: $page, perPage: 20, order: $order) {
        ...ItemContributionListFragment
      }
    }
  }
`;
