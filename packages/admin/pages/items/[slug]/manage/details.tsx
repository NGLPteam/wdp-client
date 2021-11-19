import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { detailsManageSlugItemsQuery as Query } from "@/relay/detailsManageSlugItemsQuery.graphql";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import ItemUpdateForm from "components/composed/item/ItemUpdateForm";
import SchemaInstanceForm from "components/api/SchemaInstanceForm";
import { LoadingCircle } from "components/atomic";

function ManageDetails({ data }: Props) {
  return data && data.item ? (
    <>
      <ItemUpdateForm data={data?.item} />
      <SchemaInstanceForm
        instance={data?.item}
        schemaKind="ITEM"
        successNotification="forms.item.update.schemaSuccess"
        failureNotification="forms.item.update.schemaFailure"
      />
    </>
  ) : (
    <LoadingCircle />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
};
ManageDetails.getLayout = getLayout;

export default ManageDetails;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query detailsManageSlugItemsQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutQueryFragment
      ...ItemUpdateFormFragment
      ...SchemaInstanceFormFragment
    }
  }
`;
