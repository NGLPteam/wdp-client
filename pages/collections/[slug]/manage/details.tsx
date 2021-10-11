import React from "react";
import { graphql } from "react-relay";
import type { detailsManageSlugCollectionsPagesQuery as Query } from "@/relay/detailsManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import CollectionUpdateForm from "components/composed/collection/CollectionUpdateForm";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import SchemaInstanceForm from "components/api/SchemaInstanceForm";

function CollectionDetails({ data }: Props) {
  if (!data || !data.collection) return null;

  return (
    <>
      <CollectionUpdateForm data={data?.collection} />
      <SchemaInstanceForm
        instance={data?.collection}
        schemaData={data?.collection}
        data={data}
        schemaKind="COLLECTION"
        successNotification="forms.collection.update.schemaSuccess"
        failureNotification="forms.collection.update.schemaFailure"
      />
    </>
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props> showSidebar query={query} {...props} />
  );
};
CollectionDetails.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query detailsManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...CollectionUpdateFormFragment
      ...SchemaInstanceFormFragment
      ...SchemaSelectorDataFragment
    }
    ...SchemaInstanceFormSchemaOptionsFragment
  }
`;

export default CollectionDetails;
