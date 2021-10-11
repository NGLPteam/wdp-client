import React from "react";
import { graphql } from "react-relay";
import type { detailsManageSlugItemsQuery as Query } from "@/relay/detailsManageSlugItemsQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import ItemUpdateForm from "components/composed/item/ItemUpdateForm";
import SchemaInstanceForm from "components/api/SchemaInstanceForm";

function ManageDetails({ data }: Props) {
  if (!data || !data.item) return null;

  return (
    <>
      <ItemUpdateForm data={data?.item} />
      <SchemaInstanceForm
        instance={data?.item}
        data={data}
        schemaKind="ITEM"
        successNotification="forms.item.update.schemaSuccess"
        failureNotification="forms.item.update.schemaFailure"
      />
    </>
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
      ...ItemLayoutFragment
      ...ItemUpdateFormFragment
      ...SchemaInstanceFormFragment
    }
    ...SchemaInstanceFormSchemaOptionsFragment
  }
`;
