type MapSortBy = {
  (id: "updatedAt", desc: boolean): "RECENT" | "OLDEST" | null;
};

const mapSortBy: MapSortBy = (id, desc) => {
  if (id === "updatedAt" && desc === true) return "RECENT";
  if (id === "updatedAt" && desc === false) return "OLDEST";
  return null;
};

export default mapSortBy;
