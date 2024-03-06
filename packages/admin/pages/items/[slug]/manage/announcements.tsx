import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import EntityAnnouncementsList from "components/composed/announcements/EntityAnnouncementsList";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { AuthContextProvider } from "contexts/AuthContext";
import { LoadingCircle } from "components/atomic";
import ItemLayout from "components/composed/item/ItemLayout";
import type { announcementsManageSlugItemsPagesQuery as Query } from "@/relay/announcementsManageSlugItemsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ItemAnnouncements({ queryRef, ...layoutProps }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <AuthContextProvider data={item}>
      <ItemLayout data={item} {...layoutProps}>
        <EntityAnnouncementsList data={item} headerStyle="secondary" />
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

ItemAnnouncements.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query announcementsManageSlugItemsPagesQuery($itemSlug: Slug!, $page: Int) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...AuthContextFragment
      ...EntityAnnouncementsListFragment
    }
  }
`;

export default ItemAnnouncements;
