import React from "react";
import { useRouter } from "next/router";
import ItemLayout from "components/composed/item/ItemLayout";
import { RouteHelper } from "routes";

export default function ItemDetail() {
  const router = useRouter();
  const activeRoute = RouteHelper.activeRoute();

  // Nothing to see here, move on to collections
  router.replace({
    pathname: activeRoute.redirect,
    query: { ...router.query },
  });

  return null;
}

ItemDetail.getLayout = (page) => {
  return <ItemLayout>{page}</ItemLayout>;
};
