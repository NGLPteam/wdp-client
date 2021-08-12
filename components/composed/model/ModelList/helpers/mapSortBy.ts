type Orders = "RECENT" | "OLDEST";

type OrderableProperties = "updatedAt";

interface OrderConfig {
  id: OrderableProperties;
  desc?: boolean;
}

type MapSortBy = {
  (id: string, desc?: boolean): Orders | null;
};

export const mapSortBy: MapSortBy = (id, desc) => {
  if (id === "updatedAt" && desc) return "RECENT";
  if (id === "updatedAt" && !desc) return "OLDEST";
  return null;
};

type ReverseMapSortBy = {
  (orders: Orders): OrderConfig | null;
};

export const reverseMapSortBy: ReverseMapSortBy = (order) => {
  if (order === "RECENT") return { id: "updatedAt", desc: true };
  if (order === "OLDEST") return { id: "updatedAt", desc: false };
  return null;
};
