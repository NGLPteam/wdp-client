import React from "react";
import { useRouter } from "next/router";
import ItemLayout from "components/composed/item/ItemLayout";

export default function ItemDetail() {
  const router = useRouter();

  // Nothing to see here, move on to items
  router.push({
    pathname: `/items/[slug]/items`,
    query: { ...router.query },
  });

  return null;
}

ItemDetail.getLayout = (page) => {
  return <ItemLayout>{page}</ItemLayout>;
};
