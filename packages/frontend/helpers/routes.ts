import { EntityKind } from "types/graphql-schema";

const KIND_MAP = {
  COMMUNITY: "community",
  COLLECTION: "collection",
  ITEM: "item",
  "%future added value": null,
};

export function getRouteByEntityKind(kind: EntityKind) {
  return KIND_MAP[kind];
}

const TYPE_MAP = {
  Community: "community",
  Collection: "collection",
  Item: "item",
  "%other": null,
};

export function getRouteByEntityType(
  typename: "Collection" | "Community" | "Item" | "%other"
) {
  return TYPE_MAP[typename];
}
