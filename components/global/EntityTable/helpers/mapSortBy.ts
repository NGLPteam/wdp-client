function mapSortBy(id, desc) {
  if (id === "updatedAt" && desc === true) return "RECENT";
  if (id === "updatedAt" && desc === false) return "OLDEST";
}

export default mapSortBy;
