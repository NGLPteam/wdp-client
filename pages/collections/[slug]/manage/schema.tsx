import React from "react";
import { graphql } from "react-relay";
import type { schemaManageSlugCollectionsPagesQuery as Query } from "@/relay/schemaManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import SchemaInstanceForm from "components/api/SchemaInstanceForm";

function ManageDetails({ data }: Props) {
  if (!data || !data.collection) return null;

  return (
    <SchemaInstanceForm
      instance={data?.collection}
      successNotification="forms.collection.update.schemaSuccess"
      failureNotification="forms.collection.update.schemaFailure"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props> showSidebar query={query} {...props} />
  );
};
ManageDetails.getLayout = getLayout;

export default ManageDetails;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query schemaManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...SchemaInstanceFormFragment
    }
  }
`;
