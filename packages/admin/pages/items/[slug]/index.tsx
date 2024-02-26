import { GetLayout } from "@wdp/lib/types/page";
import { graphql } from "relay-runtime";
import { SlugItemsPageQuery as Query } from "@/relay/SlugItemsPageQuery.graphql";
import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import ItemSlugRedirect from "components/composed/item/ItemSlugRedirect";

function ItemSlug({ data }: QueryProps) {
  return <ItemSlugRedirect data={data?.item} />;
}

type QueryProps = {
  data: Query["response"];
};

const getLayout: GetLayout<QueryProps> = (props) => {
  return <ItemLayoutQuery<Query, QueryProps> query={query} {...props} />;
};

ItemSlug.getLayout = getLayout;

export default ItemSlug;

const query = graphql`
  query SlugItemsPageQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutQueryFragment
      ...ItemSlugRedirectFragment
    }
  }
`;
