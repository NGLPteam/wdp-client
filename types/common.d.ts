export interface PageInfo {
  page: number;
  perPage: number;
  pageCount: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export type EntityKind =
  | "COLLECTION"
  | "COMMUNITY"
  | "ITEM"
  | "%future added value";
