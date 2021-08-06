import React from "react";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import { useRouter } from "next/router";
import { RouteHelper } from "routes";
import { Page } from "types/page";

const CollectionDetail: Page = () => {
  const router = useRouter();
  const activeRoute = RouteHelper.activeRoute();

  // Nothing to see here, move on to collections
  router.replace({
    pathname: activeRoute?.redirect,
    query: { ...router.query },
  });

  return null;
};

CollectionDetail.getLayout = (page) => {
  return <CollectionLayout>{page}</CollectionLayout>;
};

export default CollectionDetail;
