import Props from "./iconType";

function IconDelete({ title, ...props }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Trash can"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2h-.5v2h-4v1H3v9.5h10V5h1.5V4h-4V2H6zm3.5 2V3h-3v1h3zm-4 1H4v8.5h8V5H5.5zm1 2v-.5h-1V12h1V7zm2 0v-.5h-1V12h1V7zm2 0v-.5h-1V12h1V7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconDelete;
