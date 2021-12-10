import Props from "./iconType";

export default function Search32({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 6H3v20h26V6zm1-1v22H2V5h28z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.459 11.751l-8.037 10.046-4.976-3.98-5.316 5.847.74.672 4.684-5.152 5.024 4.019 7.963-9.954 8.605 8.605.708-.708-9.395-9.395zM10.5 10.5a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0z"
        fill="currentColor"
      />
    </svg>
  );
}
