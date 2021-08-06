import Props from "./iconType";

function IconPlus({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Plus"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.525 8.5h-11v-1h11v1zM13.525 13h-11v-1h11v1zM13.525 4h-11V3h11v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconPlus;
