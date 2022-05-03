import { EntityKind } from "types/graphql-schema";

const KIND_MAP = {
  COMMUNITY: "community",
  COLLECTION: "collection",
  ITEM: "item",
  "%future added value": null,
};

export function getRouteByEntityKind(kind?: EntityKind) {
  return kind ? KIND_MAP[kind] : null;
}

const TYPE_MAP: Record<string, string> = {
  Community: "community",
  Collection: "collection",
  Item: "item",
};

export function getRouteByEntityType(typename?: string) {
  return typename ? TYPE_MAP[typename] : null;
}

export function getOrigin(): string | undefined {
  let origin;

  if (typeof window !== "undefined") {
    origin = window.location.origin;
  }

  return origin;
}
