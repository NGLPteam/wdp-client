import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { contributionsManageSlugItemsQuery as Query } from "@/relay/contributionsManageSlugItemsQuery.graphql";

import ItemLayout from "components/composed/item/ItemLayout";
import ErrorPage from "next/error";

function ManageItem() {
  const queryVars = useBaseListQueryVars();
  const itemSlug = useRouteSlug();
  if (!itemSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, itemSlug }}
    >
      {({ data }) => (
        <ItemLayout data={data?.item} showSidebar>
          Item Contributions
        </ItemLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query contributionsManageSlugItemsQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
    }
  }
`;

export default ManageItem;
