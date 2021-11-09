/* eslint-disable react/no-children-prop */
import React, { useCallback } from "react";
import { graphql } from "react-relay";
import type { GraphQLTaggedNode, OperationType } from "relay-runtime";

import QueryWrapper from "@wdp/lib/api/components/QueryWrapper";
import { SlugToIDCommunityQuery as CommunityQuery } from "@/relay/SlugToIDCommunityQuery.graphql";
import { SlugToIDCollectionQuery as CollectionQuery } from "@/relay/SlugToIDCollectionQuery.graphql";
import { SlugToIDItemQuery as ItemQuery } from "@/relay/SlugToIDItemQuery.graphql";

/**
 * A component that will accept a community slug and extract its node id.
 *
 * @see SlugToID
 */
export function CommunitySlugToID({
  children,
  onEmpty,
  slug,
}: WrapperProps<CommunityQuery>) {
  const extractId: IDExtractor<CommunityQuery> = useCallback(
    (data) => data?.community?.id,
    []
  );

  return (
    <SlugToID<CommunityQuery>
      children={children}
      extractId={extractId}
      query={communityQuery}
      onEmpty={onEmpty}
      variables={{ slug }}
    />
  );
}

/**
 * A component that will accept a collection slug and extract its node id.
 *
 * @see SlugToID
 */
export function CollectionSlugToID({
  children,
  onEmpty,
  slug,
}: WrapperProps<CollectionQuery>) {
  const extractId: IDExtractor<CollectionQuery> = useCallback(
    (data) => data?.collection?.id,
    []
  );

  return (
    <SlugToID<CollectionQuery>
      children={children}
      extractId={extractId}
      query={collectionQuery}
      onEmpty={onEmpty}
      variables={{ slug }}
    />
  );
}

/**
 * A component that will accept an item slug and extract its node id.
 *
 * @see SlugToID
 */
export function ItemSlugToID({
  children,
  onEmpty,
  slug,
}: WrapperProps<ItemQuery>) {
  const extractId: IDExtractor<ItemQuery> = useCallback(
    (data) => data?.item?.id,
    []
  );

  return (
    <SlugToID<ItemQuery>
      children={children}
      extractId={extractId}
      query={itemQuery}
      onEmpty={onEmpty}
      variables={{ slug }}
    />
  );
}

/**
 * A specialized component that wraps a query accepting a slug, and transforms it into a Relay Node ID.
 * If an ID is found, it will render its `children` function and provide the ID for consumption.
 *
 * Optionally, an `onEmpty` function can be provided, else it will render nothing.
 */
export default function SlugToID<Q extends OperationType>({
  children,
  extractId,
  onEmpty,
  query,
  variables,
}: SlugToIDProps<Q>) {
  return (
    <QueryWrapper<Q> query={query} initialVariables={variables}>
      {({ data }) => {
        const id = extractId(data);

        if (id) {
          return children({ id, variables });
        } else if (typeof onEmpty === "function") {
          return onEmpty({ variables });
        } else {
          return null;
        }
      }}
    </QueryWrapper>
  );
}

/**
 * A type describing a function that receives a GraphQL response and extracts what should be a Relay Node ID.
 */
type IDExtractor<Q extends OperationType> = (
  data: Q["response"]
) => string | null | undefined;

type RenderChildren<Q extends OperationType> = (
  props: RenderChildrenProps<Q>
) => JSX.Element;

type RenderEmpty<Q extends OperationType> = (
  props: RenderEmptyProps<Q>
) => JSX.Element;

interface RenderChildrenProps<Q extends OperationType> {
  id: string;
  variables: Q["variables"];
}

interface RenderEmptyProps<Q extends OperationType> {
  variables: Q["variables"];
}

interface SlugToIDProps<Q extends OperationType> {
  /**
   * A `render props` function that will only be called if `extractId` returns an ID.
   */
  children: RenderChildren<Q>;
  /**
   * A function that receives a GraphQL response and extracts what should be a Relay Node ID, if present.
   */
  extractId: IDExtractor<Q>;
  /**
   * An optional function that renders something else if no ID was found. Otherwise, the component will return null.
   */
  onEmpty?: RenderEmpty<Q>;
  /**
   * A query that should resolve to a Relay Node ID
   */
  query: GraphQLTaggedNode;
  /**
   * Variables for the `query`
   */
  variables: Q["variables"];
}

interface WrapperProps<Q extends OperationType> {
  children: RenderChildren<Q>;
  slug: string;
  onEmpty?: RenderEmpty<Q>;
}

const communityQuery = graphql`
  query SlugToIDCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      id
    }
  }
`;

const collectionQuery = graphql`
  query SlugToIDCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      id
    }
  }
`;

const itemQuery = graphql`
  query SlugToIDItemQuery($slug: Slug!) {
    item(slug: $slug) {
      id
    }
  }
`;
