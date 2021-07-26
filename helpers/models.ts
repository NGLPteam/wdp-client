const MODEL_MAP = {
  COMMUNITY: "communities",
  COLLECTION: "collections",
  ITEM: "items",
  USER: "users",
  CONTRIBUTOR: "contributors",
};

export function getModelSingular(value): string | null {
  const model = Object.keys(MODEL_MAP).find(
    (modelName) => modelName.toLowerCase() === value
  );
  return model || null;
}

export function getModelPlural(name): string | null {
  const key = name.toUpperCase();
  return MODEL_MAP[key] || null;
}
