import React from "react";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import { Page } from "types/page";

const Manage: Page = () => {
  return <></>;
};

Manage.getLayout = (page) => {
  return <CollectionLayout>{page}</CollectionLayout>;
};

export default Manage;
