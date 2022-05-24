import { useState, useEffect } from "react";
import { graphql } from "react-relay";
import QueryWrapper from "@wdp/lib/api/components/QueryWrapper";
import type { UseFormSetValue } from "react-hook-form";
import EntitySelector from "../EntitySelector";
import * as Styled from "./EntitySelectorUI.styles";
import { ControllerEntitySelectorCommunitiesQuery as Query } from "@/relay/ControllerEntitySelectorCommunitiesQuery.graphql";
import {
  ControllerEntitySelectorEntityQuery as EntityQuery,
  ControllerEntitySelectorEntityQueryResponse as EntityResponse,
} from "@/relay/ControllerEntitySelectorEntityQuery.graphql";

import type { ReparentEntityInput } from "@/relay/ParentSelectorModalMutation.graphql";
import type { Community, Collection, Item } from "types/graphql-schema";

interface Props {
  startEntity?: string;
  scopeToCommunity?: boolean;
  setValue?: UseFormSetValue<ReparentEntityInput>;
}

interface CommunityOption extends Omit<Partial<Community>, "__typename"> {
  __typename: string;
}
interface CollectionOption extends Omit<Partial<Collection>, "__typename"> {
  __typename: string;
}
interface ItemOption extends Omit<Item, "__typename"> {
  __typename: string;
}

export default function Controller({
  startEntity,
  scopeToCommunity,
  setValue,
}: Props) {
  const [currentEntity, setCurrent] = useState(startEntity);
  const [selected, setSelected] = useState<
    CommunityOption | CollectionOption | ItemOption | undefined
  >();

  useEffect(() => {
    if (setValue && selected) setValue("parentId", selected.id ?? "");
  }, [selected, setValue]);

  if (scopeToCommunity && !startEntity) return null;

  const queryVars = {
    slug: currentEntity || "",
  };

  const renderOptions = (
    data: readonly { node: CommunityOption | CollectionOption | ItemOption }[]
  ) => {
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
          onToggle={() => {
            setSelected(node);
          }}
          key={node.id}
        >
          {node.title}
        </EntitySelector>
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
    return (
      <Styled.Back
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
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
          }
        }
      }
    }
  }
`;
