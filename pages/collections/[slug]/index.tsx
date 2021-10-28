import { graphql } from "react-relay";
import { useRouteSlug } from "hooks";
import { SlugCollectionsPageQuery as Query } from "@/relay/SlugCollectionsPageQuery.graphql";
import { GetLayout } from "types/page";
import { useRouter } from "next/router";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import { RouteHelper } from "routes";
import { LoadingCircle } from "components/atomic";

const getLayout: GetLayout<Props> = (props) => {
  return <CollectionLayoutQuery<Query, Props> query={query} {...props} />;
};
function CollectionSlug({ data }: Props) {
  const slug = useRouteSlug();
  const router = useRouter();
  const collectionRoute = RouteHelper.findRouteByName(
    "collection.child.collections"
  );
  const itemRoute = RouteHelper.findRouteByName("collection.child.items");

  const total = data?.collection?.collections?.pageInfo?.totalCount;

  if (total && total > 0 && collectionRoute) {
    router.replace({
      pathname: collectionRoute.path,
      query: { slug },
    });
  } else if (total === 0 && itemRoute) {
    router.replace({
      pathname: itemRoute.path,
      query: { slug },
    });
  }

  return <LoadingCircle />;
}

type Props = {
  data: Query["response"];
};

CollectionSlug.getLayout = getLayout;

export default CollectionSlug;

const query = graphql`
  query SlugCollectionsPageQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      collections {
        pageInfo {
          totalCount
        }
      }
    }
  }
`;
