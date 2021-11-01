import Props from "./iconType";

function IconSearch({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Magnifying Glass"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7a4 4 0 118 0 4 4 0 01-8 0zm4-5a5 5 0 103.164 8.872l2.482 2.482.354.353.707-.707-.354-.354-2.482-2.482A5 5 0 007 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconSearch;
