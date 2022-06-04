import { useState, useEffect } from "react";
import { graphql } from "react-relay";
import QueryWrapper from "@wdp/lib/api/components/QueryWrapper";
import EntitySelector from "../EntitySelector";
import * as Styled from "./EntitySelectorUI.styles";
import { ControllerEntitySelectorCommunitiesQuery as Query } from "@/relay/ControllerEntitySelectorCommunitiesQuery.graphql";
import {
  ControllerEntitySelectorEntityQuery as EntityQuery,
  ControllerEntitySelectorEntityQueryResponse as EntityResponse,
} from "@/relay/ControllerEntitySelectorEntityQuery.graphql";

import type {
  Community,
  Collection,
  Item,
  SchemaVersion,
} from "types/graphql-schema";

interface Props {
  startEntity?: string;
  scopeToCommunity?: boolean;
  onSelect?: (val?: string) => void;
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
  startEntity,
  scopeToCommunity,
  onSelect,
}: Props) {
  const [currentEntity, setCurrent] = useState(startEntity);
  const [selected, setSelected] = useState<EntityOption | undefined>();

  useEffect(() => {
    if (onSelect) onSelect(selected?.id);
  }, [selected, onSelect]);

  if (scopeToCommunity && !startEntity) return null;

  const queryVars = {
    slug: currentEntity || "",
  };

  const renderOptions = (data: readonly { node: EntityOption }[]) => {
    return data.map(({ node }) => {
      const hasDescendants =
        node.__typename === "Community" ||
        ("hasCollections" in node && node.hasCollections) ||
        ("hasItems" in node && node.hasItems);
      return (
        <EntitySelector
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
        ) : null
      }
    </QueryWrapper>
  ) : (
    <QueryWrapper<EntityQuery> query={entityQuery} initialVariables={queryVars}>
      {({ data }) => (
        <>
          {renderBack(data)}
          {getChildren(data)}
        </>
      )}
    </QueryWrapper>
  );
}

const communitiesQuery = graphql`
  query ControllerEntitySelectorCommunitiesQuery {
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
  query ControllerEntitySelectorEntityQuery($slug: Slug!) {
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
