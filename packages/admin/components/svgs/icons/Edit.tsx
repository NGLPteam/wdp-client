import Props from "./iconType";

function IconEdit({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Pencil"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.913 2.353a1.5 1.5 0 012.122 0L14.62 3.94a1.5 1.5 0 010 2.122l-6.89 6.89-4.944 1.237 1.236-4.944 6.891-6.89zm1.415.708a.5.5 0 00-.708 0L10.681 4l2.293 2.293.94-.94a.5.5 0 000-.707l-1.586-1.585zM12.267 7L9.974 4.707 5.181 9.5l2.293 2.293L12.267 7zm-5.771 5.229l-1.751-1.751-.584 2.335 2.335-.584z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconEdit;
