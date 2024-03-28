import React from "react";
import { graphql, useFragment } from "react-relay";
import { PrecisionDate, SquareThumbnail } from "components/atomic";
import { getRouteByEntityType } from "helpers";
import { SearchEntityResultFragment$key } from "@/relay/SearchEntityResultFragment.graphql";
import SearchResultBase from "./SearchResultBase";

export default function SearchEntityResult({ data }: Props) {
  const entity = useFragment<SearchEntityResultFragment$key>(fragment, data);

  const route = getRouteByEntityType(entity.__typename);

  if (!route) {
    console.warn(`No route was found for type ${entity.__typename}`);
    return null;
  }

  return (
    <SearchResultBase
      href={`/${route}/${entity.slug}`}
      type={entity.schemaVersion.name}
      title={entity.title}
      description={entity.summary}
      image={
        entity.thumbnail.storage ? (
          <SquareThumbnail data={entity.thumbnail} size={100} />
        ) : undefined
      }
      metadata={
        entity.published?.value && <PrecisionDate data={entity.published} />
      }
    />
  );
}

interface Props {
  data: SearchEntityResultFragment$key;
}

const fragment = graphql`
  fragment SearchEntityResultFragment on Entity {
    __typename
    title
    summary
    schemaVersion {
      name
    }
    ... on Sluggable {
      slug
    }
    thumbnail {
      storage
      ...SquareThumbnailFragment
    }
    ... on ReferencesGlobalEntityDates {
      published {
        ...PrecisionDateFragment
        value
      }
    }
  }
`;
