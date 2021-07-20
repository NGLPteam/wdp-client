import React from "react";
import CollectionLayout from "components/composed/collection/CollectionLayout";

export default function CollectionDetail() {
  return "Collection detail landing page";
}

CollectionDetail.getLayout = (page) => {
  return <CollectionLayout>{page}</CollectionLayout>;
};
