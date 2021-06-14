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
interface Map {
  [key: string]: string | undefined;
}
