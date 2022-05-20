import { useState, useEffect } from "react";
import EntitySelector from "../EntitySelector";
import { graphql } from "react-relay";
import QueryWrapper from "@wdp/lib/api/components/QueryWrapper";
import {
  ControllerEntitySelectorCommunitiesQuery as Query,
  ControllerEntitySelectorCommunitiesQueryResponse as Response,
} from "@/relay/ControllerEntitySelectorCommunitiesQuery.graphql";
import {
  ControllerEntitySelectorEntityQuery as EntityQuery,
  ControllerEntitySelectorEntityQueryResponse as EntityResponse,
} from "@/relay/ControllerEntitySelectorEntityQuery.graphql";
import * as Styled from "./EntitySelectorUI.styles";

import type { ReparentEntityInput } from "@/relay/ParentSelectorModalMutation.graphql";
import type { UseFormSetValue } from "react-hook-form";

interface Props {
  startEntity?: string;
  scopeToCommunity?: boolean;
  setValue?: UseFormSetValue<ReparentEntityInput>;
}

export default function Controller({
  startEntity,
  scopeToCommunity,
  setValue,
}: Props) {
  const [currentEntity, setCurrent] = useState(startEntity);
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (setValue && selected) setValue("parentId", selected.id);
  }, [selected]);

  if (scopeToCommunity && !startEntity) return null;

  const queryVars = {
    slug: currentEntity ? currentEntity : "",
  };

  const renderOptions = (
    data:
      | Response["communities"]["edges"]
      | EntityResponse["community"]["collections"]["edges"]
      | EntityResponse["collection"]["collections"]
      | EntityResponse["item"]["items"]["edges"]
  ) => {
    return data.map(({ node }) => {
      const hasDescendants =
        node.__typename === "Community" || node.hasCollections || node.hasItems;
      return (
        <EntitySelector
          hasDescendants={hasDescendants}
          onShowDescendants={() => setCurrent(node.slug)}
          checked={node.id === selected?.id}
          onToggle={() => setSelected(node)}
          key={node.id}
        >
          {node.title}
        </EntitySelector>
      );
    });
  };

  const getDescendants = (data: EntityResponse | null | undefined) => {
    if (data?.community) {
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

  return !currentEntity ? (
    <QueryWrapper<Query> query={communitiesQuery} initialVariables={queryVars}>
      {({ data }) =>
        data?.communities.edges.length
          ? renderOptions(data.communities.edges)
          : null
      }
    </QueryWrapper>
  ) : (
    <QueryWrapper<EntityQuery> query={entityQuery} initialVariables={queryVars}>
      {({ data }) => {
        const current = data?.community
          ? data.community.title
          : data?.collection
          ? data?.collection.title
          : data?.item?.title;
        const parent = data?.community
          ? ""
          : data?.collection
          ? data.collection.parent?.slug
          : data?.item?.parent?.slug;
        return (
          <>
            <Styled.Back
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setCurrent(parent);
              }}
            >
              <Styled.Arrow icon="arrow" role="presentation" />
              {current}
            </Styled.Back>
            {getDescendants(data)}
          </>
        );
      }}
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
      __typename
      title
      collections {
        edges {
          node {
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
      __typename
      title
      parent {
        ... on Collection {
          slug
          title
        }
        ... on Community {
          slug
          title
        }
      }
      collections {
        edges {
          node {
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
          slug
          title
        }
        ... on Item {
          slug
          title
        }
      }
      items {
        edges {
          node {
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
