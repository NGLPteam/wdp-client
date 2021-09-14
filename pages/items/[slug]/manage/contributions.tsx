import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { contributionsManageSlugItemsQuery as Query } from "@/relay/contributionsManageSlugItemsQuery.graphql";

import ItemLayout from "components/composed/item/ItemLayout";
import ItemContributionList from "components/composed/contribution/ItemContributionList";
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
          <ItemContributionList<Query>
            hideHeader={true}
            nameColumn="contributor"
            data={data?.item?.contributions}
            headerStyle="secondary"
          />{" "}
        </ItemLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query contributionsManageSlugItemsQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      contributions {
        ...ItemContributionListFragment
      }
    }
  }
`;

export default ManageItem;
