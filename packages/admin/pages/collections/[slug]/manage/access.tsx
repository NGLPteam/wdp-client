import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import RoleAccessList from "components/composed/role/RoleAccessList";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { AuthContextProvider } from "contexts/AuthContext";
import { LoadingPage } from "components/atomic";
import type { accessManageSlugCollectionsPagesQuery as Query } from "@/relay/accessManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionAccess({ queryRef, ...layoutProps }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection} {...layoutProps}>
        <RoleAccessList
          data={collection}
          headerStyle="secondary"
          entityType="collection"
        />
      </CollectionLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const collectionSlug = useRouteSlug();

  if (!collectionSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ ...queryVars, ...searchQueryVars, collectionSlug }}
      loadingFallback={<LoadingPage />}
      refetchTags={["allAccessGrants", "assignedUsers"]}
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

CollectionAccess.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query accessManageSlugCollectionsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...RoleAccessListFragment
      ...AuthContextFragment
    }
  }
`;

export default CollectionAccess;
