import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { manageSlugItemsPagesQuery as Query } from "@/relay/manageSlugItemsPagesQuery.graphql";

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
      {({ data }) => <ItemLayout data={data?.item}>Manage Item</ItemLayout>}
    </QueryWrapper>
  );
}

const query = graphql`
  query manageSlugItemsPagesQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
    }
  }
`;

export default ManageItem;
