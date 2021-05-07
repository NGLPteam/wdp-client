import React from "react";

import useGetQueryParam from "hooks/useGetQueryParam";

import CollectionDetail from "components/Collections/CollectionDetail";

export default function CollectionDetailPage() {
  const slug = useGetQueryParam("slug");

  return <CollectionDetail slug={slug} />;
}