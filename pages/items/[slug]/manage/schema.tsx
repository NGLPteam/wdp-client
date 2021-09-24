import React from "react";
import { graphql } from "react-relay";
import type { schemaManageSlugSchemaQuery as Query } from "@/relay/schemaManageSlugSchemaQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import SchemaInstanceForm from "components/api/SchemaInstanceForm";

function ManageDetails({ data }: Props) {
  if (!data || !data.item) return null;

  return (
    <SchemaInstanceForm
      instance={data?.item}
      successNotification="forms.item.update.schemaSuccess"
    />
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
  query schemaManageSlugSchemaQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...SchemaInstanceFormFragment
    }
  }
`;
