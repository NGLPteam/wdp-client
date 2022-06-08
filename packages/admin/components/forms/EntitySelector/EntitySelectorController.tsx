import { useState, useEffect } from "react";
import { graphql } from "react-relay";
import QueryWrapper from "@wdp/lib/api/components/QueryWrapper";
import EntitySelectorItem from "./EntitySelectorItem";
import * as Styled from "./EntitySelector.styles";
import { LoadingCircle } from "components/atomic";
import { EntitySelectorControllerCommunitiesQuery as Query } from "@/relay/EntitySelectorControllerCommunitiesQuery.graphql";
import {
  EntitySelectorControllerEntityQuery as EntityQuery,
  EntitySelectorControllerEntityQueryResponse as EntityResponse,
} from "@/relay/EntitySelectorControllerEntityQuery.graphql";

import type {
  Community,
  Collection,
  Item,
  SchemaVersion,
} from "types/graphql-schema";

interface Props {
  /* Slug of the entity to show expanded at launch of the selector. If no slug, the selector opens at the all communities scope. A value is required if scopeToCommunity is true.  */
  startSlug?: string;
  /* The value of the select is reset on each page change as the user navigates through the hierarchy to prevent selecting an entity that is out of view. Defaults to "", but accepts a different default, e.g. if it's useful to preserve the previous value when a new entity is not selected. */
  resetValue?: string;
  /* Show the current community as the top-level entity in the hierarchy, e.g. to prevent the user from reparenting an item out of its current community. */
  scopeToCommunity?: boolean;
  /* The id of the current entity to filter out of the selector hierarchy when selecting self is not an option.  */
  omitSelfId?: string;
  /* The specific setValue function from react-hook-form to call when the value of the selector changes. */
  onSelect?: (val: string) => void;
}

interface CommunityOption
  extends Omit<Partial<Community>, "__typename" | "schemaVersion"> {
  __typename: string;
  schemaVersion: Partial<SchemaVersion>;
}
interface CollectionOption
  extends Omit<Partial<Collection>, "__typename" | "schemaVersion"> {
  __typename: string;
  schemaVersion: Partial<SchemaVersion>;
}
interface ItemOption
  extends Omit<Partial<Item>, "__typename" | "schemaVersion"> {
  __typename: string;
  schemaVersion: Partial<SchemaVersion>;
}

export type EntityOption = CommunityOption | CollectionOption | ItemOption;

export default function Controller({
  startSlug,
  resetValue = "",
  scopeToCommunity,
  omitSelfId,
  onSelect,
}: Props) {
  const [currentEntity, setCurrent] = useState(startSlug);
  const [selected, setSelected] = useState<EntityOption | undefined>();

  useEffect(() => {
    if (onSelect) onSelect(selected?.id ?? resetValue);
  }, [selected, onSelect, resetValue]);

  if (scopeToCommunity && !startSlug) return null;

  const queryVars = {
    slug: currentEntity || "",
  };

  const renderOptions = (data: readonly { node: EntityOption }[]) => {
    return data
      .filter(({ node }) => node.id !== omitSelfId)
      .map(({ node }) => {
        const hasDescendants =
          node.__typename === "Community" ||
          ("hasCollections" in node && node.hasCollections) ||
          ("hasItems" in node && node.hasItems);
        return (
          <EntitySelectorItem
            hasDescendants={hasDescendants}
            onShowDescendants={() => setCurrent(node.slug)}
            checked={node.id === selected?.id}
            onSelectEntity={() => setSelected(node)}
            onPageChange={() => setSelected(undefined)}
            key={node.id}
            entity={node}
          />
        );
      });
  };

  const getChildren = (data: EntityResponse | null | undefined) => {
    if (data?.community?.collections) {
      return renderOptions(data.community.collections?.edges);
    }
    if (data?.collection) {
      return renderOptions([
        ...data.collection.collections?.edges,
        ...data.collection.items?.edges,
      ]);
    }
    return data?.item?.items?.edges.length
      ? renderOptions(data.item.items.edges)
      : null;
  };

  const renderBack = (data: EntityResponse | null | undefined) => {
    const current = data?.community
      ? data.community.title
      : data?.collection
      ? data?.collection.title
      : data?.item?.title;
    const parent =
      data?.collection && data.collection.parent?.__typename !== "%other"
        ? data.collection.parent?.slug
        : data?.item && data.item.parent?.__typename !== "%other"
        ? data.item.parent?.slug
        : "";
    if (!data || (data.community && scopeToCommunity)) return null;
    return (
      <Styled.Back
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setSelected(undefined);
          setCurrent(parent);
        }}
      >
        <Styled.Arrow icon="arrow" role="presentation" />
        {current}
      </Styled.Back>
    );
  };

  return !currentEntity ? (
    <QueryWrapper<Query> query={communitiesQuery} initialVariables={queryVars}>
      {({ data }) =>
        data?.communities?.edges.length ? (
          <>{renderOptions(data.communities.edges)}</>
        ) : (
          <LoadingCircle />
        )
      }
    </QueryWrapper>
  ) : (
    <QueryWrapper<EntityQuery> query={entityQuery} initialVariables={queryVars}>
      {({ data }) =>
        data ? (
          <>
            {renderBack(data)}
            {getChildren(data)}
          </>
        ) : (
          <LoadingCircle />
        )
      }
    </QueryWrapper>
  );
}

const communitiesQuery = graphql`
  query EntitySelectorControllerCommunitiesQuery {
    communities {
      edges {
        node {
          __typename
          id
          title
          slug
          schemaVersion {
            name
          }
        }
      }
    }
  }
`;

const entityQuery = graphql`
  query EntitySelectorControllerEntityQuery($slug: Slug!) {
    community(slug: $slug) {
      title
      collections {
        edges {
          node {
            __typename
            id
            title
            slug
            hasItems
            hasCollections
            schemaVersion {
              name
            }
          }
        }
      }
    }
    collection(slug: $slug) {
      title
      parent {
        ... on Collection {
          __typename
          slug
          title
        }
        ... on Community {
          __typename
          slug
          title
        }
      }
      collections {
        edges {
          node {
            __typename
            id
            title
            slug
            hasItems
            hasCollections
            schemaVersion {
              name
            }
          }
        }
      }
      items {
        edges {
          node {
            __typename
            id
            title
            slug
            hasItems
            schemaVersion {
              name
            }
          }
        }
      }
    }
    item(slug: $slug) {
      __typename
      title
      parent {
        ... on Collection {
          __typename
          slug
          title
        }
        ... on Item {
          __typename
          slug
          title
        }
      }
      items {
        edges {
          node {
            __typename
            id
            title
            slug
            hasItems
            schemaVersion {
              name
            }
          }
        }
      }
    }
  }
`;
