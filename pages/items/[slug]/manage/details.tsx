import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { detailsManageSlugItemsQuery as Query } from "@/relay/detailsManageSlugItemsQuery.graphql";
import ItemUpdateForm from "components/composed/item/ItemUpdateForm";
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
          {data?.item && <ItemUpdateForm data={data?.item} />}
        </ItemLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query detailsManageSlugItemsQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...ItemUpdateFormFragment
    }
  }
`;

export default ManageItem;
