import Props from "./iconType";

export default function Download({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4.5H20V5.5H4V4.5ZM4 11.5H20V12.5H4V11.5ZM4 18.5H20V19.5H4V18.5Z"
        fill="currenColor"
      />
    </svg>
  );
}
