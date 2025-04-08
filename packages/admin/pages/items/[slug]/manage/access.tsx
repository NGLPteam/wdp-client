import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import RoleAccessList from "components/composed/role/RoleAccessList";
import type { accessManageSlugItemsPagesQuery as Query } from "@/relay/accessManageSlugItemsPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ItemAccess({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <RoleAccessList data={item} headerStyle="secondary" entityType="item" />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["allAccessGrants", "assignedUsers"]}
    modelName="access"
    {...props}
  />
);

ItemAccess.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query accessManageSlugItemsPagesQuery($slug: Slug!, $page: Int!) {
    item(slug: $slug) {
      ...RoleAccessListFragment
    }
  }
`;

export default ItemAccess;
