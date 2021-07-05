/** This interface is helpful for any const
 * you're planning to map over by string keys */
/**
 * Usage:
//  const ITEM_MAP: Map = {
//     draft: "Draft",
//   }
//   export const item = (str: string) => ITEM_MAP[str] || str
 *
 */
export interface MapOver {
  [key: string]: string | React.ElementType | undefined;
}

export interface SortProps {
  direction: "ascending" | "descending" | "none";
  column: string;
}

export interface PageInfo {
  page: number;
  perPage: number;
  pageCount: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  totalCount: number;
}
