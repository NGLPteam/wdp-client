import React from "react";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import { useRouter } from "next/router";
import { RouteHelper } from "routes";

export default function CollectionDetail() {
  const router = useRouter();
  const activeRoute = RouteHelper.activeRoute();

  // Nothing to see here, move on to collections
  router.replace({
    pathname: activeRoute.redirect,
    query: { ...router.query },
  });

  return null;
}

CollectionDetail.getLayout = (page) => {
  return <CollectionLayout>{page}</CollectionLayout>;
};
