import { GetLayout } from "@wdp/lib/types/page";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ItemSlugRedirect from "components/composed/item/ItemSlugRedirect";
import { AuthContextProvider } from "contexts/AuthContext";
import ItemLayout from "components/composed/item/ItemLayout";
import { SlugItemsPageQuery as Query } from "@/relay/SlugItemsPageQuery.graphql";
import Layout from "./layout";

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

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} {...props} />
);

type Props = {
  queryRef: PreloadedQuery<Query>;
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
