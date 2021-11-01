import Props from "./iconType";

function IconViewGrid({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Grid"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.975 14h-5V9h5v5zM7.975 7h-5V2h5v5zM14.975 14h-5V9h5v5zM14.975 7h-5V2h5v5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconViewGrid;
