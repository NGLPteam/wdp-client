import React from "react";
import CollectionLayout from "components/composed/collection/CollectionLayout";

export default function Manage() {
  return <></>;
}

Manage.getLayout = (page) => {
  return <CollectionLayout>{page}</CollectionLayout>;
};
