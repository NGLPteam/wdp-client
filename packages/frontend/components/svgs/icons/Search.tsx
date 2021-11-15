import Props from "./iconType";

function Search({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3a4 4 0 100 8 4 4 0 000-8zM2 7a5 5 0 118.871 3.165L13.707 13l-.707.707-2.836-2.835A5 5 0 012 7z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth=".5"
      />
    </svg>
  );
}

export default Search;
