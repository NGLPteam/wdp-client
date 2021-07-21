import React from "react";
import { useRouter } from "next/router";
import CollectionLayout from "components/composed/collection/CollectionLayout";

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  return <CollectionLayout slug={slug}></CollectionLayout>;
}
