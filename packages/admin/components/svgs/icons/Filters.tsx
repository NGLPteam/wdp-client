import Props from "./iconType";

function IconFilters({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Filters"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.95 12a2.5 2.5 0 01-4.9 0H1v-1h2.05a2.5 2.5 0 014.9 0H15v1H7.95zM7 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.05 5a2.5 2.5 0 004.9 0H15V4h-2.05a2.5 2.5 0 00-4.9 0H1v1h7.05zM9 4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconFilters;
