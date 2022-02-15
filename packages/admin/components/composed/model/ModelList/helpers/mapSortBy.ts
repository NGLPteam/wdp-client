import {
  ContributorOrder,
  ContributionOrder,
  UserOrder,
  EntityOrder,
} from "types/graphql-schema";

type Orders = EntityOrder | ContributorOrder | ContributionOrder | UserOrder;

type OrderableProperties = "updatedAt";

interface OrderConfig {
  id: OrderableProperties;
  desc?: boolean;
}

type MapSortBy = {
  (id: string, desc?: boolean): Orders | null;
};

export const mapSortBy: MapSortBy = (id, desc) => {
  switch (id) {
    case "createdAt":
      return desc ? "RECENT" : "OLDEST";

    case "name":
      return desc ? "NAME_DESCENDING" : "NAME_ASCENDING";

    case "title":
      return desc ? "TITLE_DESCENDING" : "TITLE_ASCENDING";

    case "targetTitle":
      return desc ? "TARGET_TITLE_DESCENDING" : "TARGET_TITLE_ASCENDING";

    case "email":
      return desc ? "EMAIL_DESCENDING" : "EMAIL_ASCENDING";

    case "affiliation":
      return desc ? "AFFILIATION_DESCENDING" : "AFFILIATION_ASCENDING";

    case "contributions":
      return desc ? "MOST_CONTRIBUTIONS" : "LEAST_CONTRIBUTIONS";

    case "globalAdmin":
      return desc ? "RECENT" : "ADMINS_RECENT";

    case "schema":
      return desc ? "SCHEMA_NAME_DESCENDING" : "SCHEMA_NAME_ASCENDING";

    case "published":
      return desc ? "PUBLISHED_DESCENDING" : "PUBLISHED_ASCENDING";

    default:
      return null;
  }
};

type ReverseMapSortBy = {
  (orders: Orders): OrderConfig | null;
};

export const reverseMapSortBy: ReverseMapSortBy = (order) => {
  if (order === "RECENT") return { id: "updatedAt", desc: true };
  if (order === "OLDEST") return { id: "updatedAt", desc: false };
  return null;
};
