import Props from "./iconType";

function ClearIcon({ title, ...props }: Props) {
  return (
    <svg
      viewBox="6 3 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Circle with slash through a zero"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.645 23.062l-2.791 2.792-.708-.707 2.792-2.792A9.465 9.465 0 017.5 16 9.5 9.5 0 0117 6.5c2.444 0 4.672.923 6.355 2.438l2.791-2.792.708.708-2.792 2.791A9.465 9.465 0 0126.5 16a9.5 9.5 0 01-9.5 9.5 9.465 9.465 0 01-6.355-2.438zm.709-.708a8.5 8.5 0 0012-12l-12 12zM22.646 9.646a8.5 8.5 0 00-12 12l12-12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ClearIcon;
