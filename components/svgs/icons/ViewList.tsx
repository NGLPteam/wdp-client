import Props from "./iconType";

function IconViewList({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "List"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4H3V2h12v2zM15 9H3V7h12v2zM15 14H3v-2h12v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconViewList;
