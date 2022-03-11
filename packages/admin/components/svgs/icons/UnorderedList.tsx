import Props from "./iconType";

function IconUnorderedList({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Unordered list"}</title>
      <path
        d="M3 3C3 3.55228 2.55228 4 2 4C1.44772 4 1 3.55228 1 3C1 2.44772 1.44772 2 2 2C2.55228 2 3 2.44772 3 3Z"
        fill="currentColor"
      />
      <path d="M5 2.5H15V3.5H5V2.5Z" fill="currentColor" />
      <path
        d="M2 9C2.55228 9 3 8.55228 3 8C3 7.44772 2.55228 7 2 7C1.44772 7 1 7.44772 1 8C1 8.55228 1.44772 9 2 9Z"
        fill="currentColor"
      />
      <path d="M15 7.5H5V8.5H15V7.5Z" fill="currentColor" />
      <path
        d="M2 14C2.55228 14 3 13.5523 3 13C3 12.4477 2.55228 12 2 12C1.44772 12 1 12.4477 1 13C1 13.5523 1.44772 14 2 14Z"
        fill="currentColor"
      />
      <path d="M15 12.5H5V13.5H15V12.5Z" fill="currentColor" />
    </svg>
  );
}

export default IconUnorderedList;
