import React from "react";
import { useRouter } from "next/router";
import ItemLayout from "components/composed/item/ItemLayout";
import { RouteHelper } from "routes";
import { Page } from "types/page";

const ItemDetail: Page = () => {
  const router = useRouter();
  const activeRoute = RouteHelper.activeRoute();

  // Nothing to see here, move on to collections
  router.replace({
    pathname: activeRoute.redirect,
    query: { ...router.query },
  });

  return null;
};

ItemDetail.getLayout = (page) => {
  return <ItemLayout>{page}</ItemLayout>;
};

export default ItemDetail;
