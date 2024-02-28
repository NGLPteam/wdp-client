import React from "react";
import { graphql, useFragment } from "react-relay";
import { SearchResultFactoryFragment$key } from "@/relay/SearchResultFactoryFragment.graphql";
import SearchEntityResult from "./SearchEntityResult";

export default function SearchResultFactory({ data }: Props) {
  const item = useFragment<SearchResultFactoryFragment$key>(fragment, data);

  if (!item) return null;

  // Return the right entity result based on type (file, item, collection, etc...)
  switch (item.__typename) {
    case "Collection":
    case "Item":
      return <SearchEntityResult data={item} />;

    default:
      return null;
  }
}

interface Props {
  data: SearchResultFactoryFragment$key;
}

// This is meant to be updated to whatever the search result type is,
// rather than "AnyEntity".
const fragment = graphql`
  fragment SearchResultFactoryFragment on AnyEntity {
    __typename
    ...SearchEntityResultFragment
  }
`;
