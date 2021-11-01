const MODEL_MAP = {
  COMMUNITY: "communities",
  COLLECTION: "collections",
  ITEM: "items",
  USER: "users",
  CONTRIBUTOR: "contributors",
  COLLECTION_CONTRIBUTION: "collection contributions",
  ITEM_CONTRIBUTION: "item contributions",
  LINK: "link",
  ORDERING: "ordering",
  FILE: "file",
  ROLE: "role",
};

export type ModelNames = keyof typeof MODEL_MAP;

export function getModelPlural(name: Lowercase<ModelNames>): string | null {
  const key = <Uppercase<ModelNames>>name.toUpperCase();
  if (!Object.keys(MODEL_MAP).includes(key)) return null;
  return MODEL_MAP[key];
}
