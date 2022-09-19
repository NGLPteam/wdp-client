import Props from "./iconType";

export default function View({ title, ...props }: Props) {
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
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM5.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8s2.5 4.5 7 4.5S15 8 15 8s-2.5-4.5-7-4.5S1 8 1 8Zm1.188 0 .084-.118c.277-.384.69-.896 1.228-1.406C4.586 5.448 6.102 4.5 8 4.5c1.898 0 3.414.948 4.5 1.976A10.13 10.13 0 0 1 13.812 8 10.13 10.13 0 0 1 12.5 9.524C11.414 10.552 9.898 11.5 8 11.5c-1.898 0-3.414-.948-4.5-1.976A10.132 10.132 0 0 1 2.188 8Z"
        fill="currentColor"
      />
    </svg>
  );
}
