import Props from "./iconType";

function IconUser({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "User"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM3.741 11.657c-.608.66-.743 1.604-.743 2.843h-1c0-1.247.116-2.553 1.008-3.52.895-.973 2.451-1.48 4.993-1.48 2.507 0 4.073.366 4.978 1.271.914.914 1.021 2.248 1.021 3.729h-1c0-1.519-.141-2.435-.728-3.021-.594-.595-1.778-.979-4.27-.979-2.459 0-3.653.5-4.259 1.157z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconUser;
