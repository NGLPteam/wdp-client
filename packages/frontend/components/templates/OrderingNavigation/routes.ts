import { graphql, readInlineData } from "relay-runtime";
import { routesOrderingTemplateFragment$key } from "@/relay/routesOrderingTemplateFragment.graphql";
import { getRouteByEntityType } from "@/helpers/routes";

export const hrefFromTypename = (
  data?: routesOrderingTemplateFragment$key | null,
) => {
  if (!data) return null;

  const { entry, entrySlug } = readInlineData(fragment, data);

  switch (entry.__typename) {
    case "Collection":
    case "Item":
    case "Community":
      return `/${getRouteByEntityType(entry.__typename)}/${entrySlug}`;
    case "EntityLink":
      return `/${getRouteByEntityType(entry.target.__typename)}/${entrySlug}`;
    default:
      return null;
  }
};

const fragment = graphql`
  fragment routesOrderingTemplateFragment on OrderingEntry @inline {
    entrySlug
    entry {
      ... on Collection {
        __typename
      }
      ... on Item {
        __typename
      }
      ... on Community {
        __typename
      }
      ... on EntityLink {
        __typename
        target {
          ... on Collection {
            __typename
          }
          ... on Item {
            __typename
          }
          ... on Community {
            __typename
          }
        }
      }
    }
  }
`;
