import React from "react";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import { useRouter } from "next/router";

export default function CollectionDetail() {
  const router = useRouter();

  // Nothing to see here, move on to collections
  router.push({
    pathname: `/collection/[slug]/collections`,
    query: { ...router.query },
  });

  return null;
}

CollectionDetail.getLayout = (page) => {
  return <CollectionLayout>{page}</CollectionLayout>;
};
