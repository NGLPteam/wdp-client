import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars, useRouteSlug } from "hooks";
import ErrorPage from "next/error";
import { LoadingPage } from "components/atomic";
import ItemLayout from "components/composed/item/ItemLayout";
import EntityHarvestRecordsList from "components/composed/harvesting/EntityHarvestRecordsList";
import { AuthContextProvider } from "contexts/AuthContext";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import type { recordsItemQuery as Query } from "@/relay/recordsItemQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ItemRecords({ queryRef, ...layoutProps }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <AuthContextProvider data={item}>
      <ItemLayout data={item} {...layoutProps}>
        <EntityHarvestRecordsList data={item} headerStyle="secondary" />
      </ItemLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  const slug = useRouteSlug();

  if (!slug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ slug }}
      loadingFallback={<LoadingPage />}
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

ItemRecords.getLayout = getLayout;

export default ItemRecords;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query recordsItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityHarvestRecordsListFragment
      ...ItemLayoutFragment
      ...AuthContextFragment
    }
  }
`;
