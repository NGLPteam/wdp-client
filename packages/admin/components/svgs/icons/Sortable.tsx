import Props from "./iconType";

function IconSortable({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Sorting Arrows"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.026 2.5L12.6 5.791l-.574.82-4-2.89-4 2.89-.573-.82L8.026 2.5zm-4.574 7.709l.574-.82 4 2.89 4-2.89.573.82L8.025 13.5 3.452 10.21z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconSortable;
