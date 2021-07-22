import React from "react";
import ItemLayout from "components/composed/item/ItemLayout";

export default function Manage() {
  return <></>;
}

Manage.getLayout = (page) => {
  return <ItemLayout>{page}</ItemLayout>;
};
