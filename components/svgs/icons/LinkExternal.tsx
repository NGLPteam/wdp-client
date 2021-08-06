import Props from "./iconType";

function LinkExternal({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Link external arrow"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3h9v9h-1V4H4V3z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.354 4.354l-8.5 8.5-.708-.708 8.5-8.5.708.708z"
        fill="currentColor"
      />
    </svg>
  );
}

export default LinkExternal;
