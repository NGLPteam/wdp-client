import React from "react";
import ItemLayout from "components/composed/item/ItemLayout";
import { Page } from "types/page";

const Manage: Page = () => {
  return <></>;
};

Manage.getLayout = (page) => {
  return <ItemLayout>{page}</ItemLayout>;
};

export default Manage;
